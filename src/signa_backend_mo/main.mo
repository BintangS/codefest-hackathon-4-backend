import Time "mo:base/Time";
import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Bool "mo:base/Bool";
import Vector "mo:vector/Class";
import Blob "mo:base/Blob";
import Uuid "mo:uuid/UUID";
import Source "mo:uuid/async/SourceV4";

actor {
   public query func greet(name : Text) : async Text {
      return "Hello, " # name # "!";
   };
   type User = {
      id : Principal;
      userName : Text;
      createdAt : Time.Time;
   };

   let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);

   type Document = {
        id : Text;
        ownerId : Principal;
        signedBy : Principal;
        document : Blob;
        createdAt : Time.Time;
        signedAt : Time.Time;
   };

   let documents = TrieMap.TrieMap<Text, Document>(Text.equal, Text.hash);

   public shared func createUser(id : Principal, username : Text) : async Result.Result<User, Text> {

      if (users.get(id) != null) {
         return #err("User exists!");
      };

      let user : User = {
         id = id;
         userName = username;
         createdAt = Time.now();
      };

      users.put(user.id, user);

      return #ok(user);
   };

   public query func getUserById(userId: Principal) : async Result.Result<User, Text> {
        switch(users.get(userId)) {
            case (?user) {
                return #ok(user);
            };
            case null {
                return #err("User not found!");
            };
        };
   };

   public query func deleteUser(userId: Principal) : async Result.Result<Bool, Text> {
        switch (users.remove(userId)) {
            case null {
                return #err("User not found!");
            };
            case (?deletedUser) {
                return #ok(deletedUser.id == userId);
            };
        }
   };

   public shared func createDocument(ownerId : Principal, document : Blob, signedBy : Principal) : async Document {
        let g = Source.Source();
        let uuid = Uuid.toText(await g.new());

        let doc : Document = {
            id = uuid;
            ownerId = ownerId;
            signedBy = signedBy;
            document = document;
            createdAt = Time.now();
            signedAt = Time.now();
        };

        documents.put(doc.id, doc);

        return doc;
   };

   public shared func createDocumentUsingEmail(ownerId : Principal, document : Blob, signerEmail : Text) : async Result.Result<Document, Text> {

        for (user in users.vals()) {
            if (user.userName == signerEmail) {
                let g = Source.Source();
                let uuid = Uuid.toText(await g.new());

                let doc : Document = {
                    id = uuid;
                    ownerId = ownerId;
                    signedBy = user.id;
                    document = document;
                    createdAt = Time.now();
                    signedAt = Time.now();
                };

                documents.put(doc.id, doc);

                return #ok(doc);
            };
        };

        return #err("User not found!");
    };

    public shared func signDocument(ownerId : Principal, document : Blob, documentId : Text) : async Text {

        switch(documents.get(documentId)) {
            case null{
                return "Document not found!";
            };
            case (?doc) {
                if (doc.ownerId != ownerId) {
                    return "You are not supposed to sign this document!";
                };

                let newDoc : Document = {
                    id = doc.id;
                    ownerId = doc.ownerId;
                    signedBy = doc.signedBy;
                    createdAt = doc.createdAt;
                    signedAt = Time.now();
                    document = document;
                };

                documents.put(doc.id, newDoc);
                return "Document signed!";
            }
        };
    };

    public query func getAllDocumentByUser(userId: Principal) : async [Document] {
        let docsBelongToUser = Vector.Vector<Document>();

        for (doc in documents.vals()) {
            if (doc.ownerId == userId) {
                docsBelongToUser.add(doc);
            };

            if (doc.signedBy == userId) {
                docsBelongToUser.add(doc);
            };
        };

        return Vector.toArray(docsBelongToUser);
   };

   public query func getDocumentByIdAndSigneeId(documentId: Text, signeeId: Principal) : async Result.Result<Document, Text> {
        switch(documents.get(documentId)) {
            case null {
                return #err("Document not found!");
            };
            case (?doc) {
                if (doc.signedBy != signeeId) {
                    return #err("You are not supposed to sign this document!");
                };

                return #ok(doc);
            };
        };
   };
};