import {
    Canister,
    query,
    ic,
    text,
    update,
    Void,
    Principal,
    Variant,
    Err,
    Ok,
    Record,
    nat64,
    bool,
    StableBTreeMap,
    Vec,
    Result,
    int64,
    blob,
    nat,
} from 'azle';
import { v4 as uuidv4 } from 'uuid';

const Message = Variant({
    NotFound: text,
    Succes: text,
    Fail: text,
});

type Message = typeof Message.tsType;

const User = Record({
    id: Principal,
    userName: text,
    createdAt: nat64,
});
type User = typeof User.tsType;

const UserPayload = Record({
    id: Principal,
    name: text,
});

const Document = Record({
    id: text,
    ownerId: Principal,
    document: blob,
    signedBy: Principal,
    createdAt: nat64,
    signedAt: nat64,
})
type Document = typeof Document.tsType;

const listOfUser = StableBTreeMap<Principal, User>(0);
const listOfDocument = StableBTreeMap<text, Document>(1);

export default Canister({
    // Create new User
    createUser: update([UserPayload], Message, (payload) => {
        let newUser = {
            id: payload.id,
            listOfForm: new Array(),
            listOfAnswer: new Array(),
            userName: payload.name,
            createdAt: ic.time(),
        };
        listOfUser.insert(newUser.id, newUser);
        return { Succes: 'Success adding new user' };
    }),

    // Update
    updateUser: update([User], Message, (user) => {
        const exist = listOfUser.get(user.id);
        if ('None' in exist)
            return { NotFound: `cannot update user with id=${user.id} not found` };

        listOfUser.insert(exist.Some.id, user);
        return { Succes: 'Success updating user' };
    }),

    // get All User
    getAllUser: query([], Vec(User), () => {
        return listOfUser.values();
    }),

    // Get User by id
    getUserById: query([Principal], Result(User, Message), (id) => {
        const user = listOfUser.get(id);
        if ('None' in user)
            return Err({ NotFound: `user with id=${id} not found` });

        return Ok(user.Some);
    }),

    greet: query([text], text, (name) => {
        return 'Hello ' + name;
    }),

    // Delete User by id
    deleteUser: update([Principal], Message, (id) => {
        const user = listOfUser.get(id);
        if ('None' in user)
            return { NotFound: `user with id=${id} not found` };

        listOfUser.remove(id);
        return { Succes: `Success deleting user with id=${id}` };
    }),

    // create document uploaded by users
    createDocument: update([Principal, blob, Principal], Result(Document, Message), (ownerId, document, signeeId) => {
        // TODO: implement validations and throw error if needed
        
        let newDocument = {
            id: uuidv4(),
            ownerId: ownerId,
            document: document,
            createdAt: ic.time(),
            signedBy: signeeId,
            signedAt: ic.time(),
        };
        listOfDocument.insert(newDocument.id, newDocument);
        return Ok(newDocument);
    }),
    
    // update document (signed by user)
    signDocument: update([Principal, blob, text], Message, (signeeId, document, documentId) => {
        const doc = listOfDocument.get(documentId);
        if ('None' in doc)
            return { NotFound: `document with id=${documentId} not found` };
        else
            if (doc.Some.signedBy !== signeeId)
                return { Fail: 'document not assigned to this user' };

        doc.Some.document = document;
        doc.Some.signedAt = ic.time();
        listOfDocument.insert(documentId, doc.Some);
        return { Succes: `Success signing document with id=${documentId}` };
    }),

    // // get document by id
    // getDocumentByIdAndSigneeId: query([text, Principal], Result(Document, Message), (documentId, signeeId) => {
    //     const doc = listOfDocument.get(documentId);
    //     if ('None' in doc)
    //         return Err({ NotFound: `document with id=${documentId} not found` });
    //     else
    //         if (doc.Some.signedBy !== signeeId)
    //             return Err({ Fail: 'document not signed by user' });
        
    //     return Ok(doc.Some);
    // }),

    // // get all document owned by user
    // getDocumentByOwner: query([Principal], Vec(Document), (id) => {
    //     return listOfDocument.values().filter((doc) => doc.ownerId === id);
    // }),

    // // get all document signed by user
    // getDocumentBySignee: query([Principal], Vec(Document), (id) => {
    //     return listOfDocument.values().filter((doc) => doc.signedBy === id);
    // }),

    // get all documents
    getAllDocument: query([], Vec(Document), () => {
        return listOfDocument.values();
    }),
});