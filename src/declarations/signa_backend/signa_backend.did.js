export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createDocument' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Nat8), IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'ownerId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'signedAt' : IDL.Nat64,
              'signedBy' : IDL.Principal,
              'document' : IDL.Vec(IDL.Nat8),
            }),
            'Err' : IDL.Variant({
              'Fail' : IDL.Text,
              'NotFound' : IDL.Text,
              'Succes' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'createUser' : IDL.Func(
        [IDL.Record({ 'id' : IDL.Principal, 'name' : IDL.Text })],
        [
          IDL.Variant({
            'Fail' : IDL.Text,
            'NotFound' : IDL.Text,
            'Succes' : IDL.Text,
          }),
        ],
        [],
      ),
    'deleteUser' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Fail' : IDL.Text,
            'NotFound' : IDL.Text,
            'Succes' : IDL.Text,
          }),
        ],
        [],
      ),
    'getAllDocument' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Text,
              'ownerId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'signedAt' : IDL.Nat64,
              'signedBy' : IDL.Principal,
              'document' : IDL.Vec(IDL.Nat8),
            })
          ),
        ],
        ['query'],
      ),
    'getAllUser' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'userName' : IDL.Text,
              'createdAt' : IDL.Nat64,
            })
          ),
        ],
        ['query'],
      ),
    'getUserById' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'userName' : IDL.Text,
              'createdAt' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'Fail' : IDL.Text,
              'NotFound' : IDL.Text,
              'Succes' : IDL.Text,
            }),
          }),
        ],
        ['query'],
      ),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'signDocument' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Nat8), IDL.Text],
        [
          IDL.Variant({
            'Fail' : IDL.Text,
            'NotFound' : IDL.Text,
            'Succes' : IDL.Text,
          }),
        ],
        [],
      ),
    'updateUser' : IDL.Func(
        [
          IDL.Record({
            'id' : IDL.Principal,
            'userName' : IDL.Text,
            'createdAt' : IDL.Nat64,
          }),
        ],
        [
          IDL.Variant({
            'Fail' : IDL.Text,
            'NotFound' : IDL.Text,
            'Succes' : IDL.Text,
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
