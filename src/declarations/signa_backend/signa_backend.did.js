export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Document = IDL.Record({
    'id' : IDL.Text,
    'ownerId' : IDL.Principal,
    'createdAt' : Time,
    'signedAt' : Time,
    'signedBy' : IDL.Principal,
    'document' : IDL.Vec(IDL.Nat8),
  });
  const Result_1 = IDL.Variant({ 'ok' : Document, 'err' : IDL.Text });
  const User = IDL.Record({
    'id' : IDL.Principal,
    'userName' : IDL.Text,
    'createdAt' : Time,
  });
  const Result = IDL.Variant({ 'ok' : User, 'err' : IDL.Text });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  return IDL.Service({
    'createDocument' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Nat8), IDL.Principal],
        [Document],
        [],
      ),
    'createDocumentUsingEmail' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Nat8), IDL.Text],
        [Result_1],
        [],
      ),
    'createUser' : IDL.Func([IDL.Principal, IDL.Text], [Result], []),
    'deleteUser' : IDL.Func([IDL.Principal], [Result_2], ['query']),
    'getAllDocumentByUser' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(Document)],
        ['query'],
      ),
    'getDocumentByIdAndSigneeId' : IDL.Func(
        [IDL.Text, IDL.Principal],
        [Result_1],
        ['query'],
      ),
    'getUserById' : IDL.Func([IDL.Principal], [Result], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'signDocument' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Nat8), IDL.Text],
        [IDL.Text],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
