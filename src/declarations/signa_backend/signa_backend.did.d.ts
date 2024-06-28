import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'createDocument' : ActorMethod<
    [Principal, Uint8Array | number[], Principal],
    {
        'Ok' : {
          'id' : string,
          'ownerId' : Principal,
          'createdAt' : bigint,
          'signedAt' : bigint,
          'signedBy' : Principal,
          'document' : Uint8Array | number[],
        }
      } |
      {
        'Err' : { 'Fail' : string } |
          { 'NotFound' : string } |
          { 'Succes' : string }
      }
  >,
  'createUser' : ActorMethod<
    [{ 'id' : Principal, 'name' : string }],
    { 'Fail' : string } |
      { 'NotFound' : string } |
      { 'Succes' : string }
  >,
  'deleteUser' : ActorMethod<
    [Principal],
    { 'Fail' : string } |
      { 'NotFound' : string } |
      { 'Succes' : string }
  >,
  'getAllDocument' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'ownerId' : Principal,
        'createdAt' : bigint,
        'signedAt' : bigint,
        'signedBy' : Principal,
        'document' : Uint8Array | number[],
      }
    >
  >,
  'getAllUser' : ActorMethod<
    [],
    Array<{ 'id' : Principal, 'userName' : string, 'createdAt' : bigint }>
  >,
  'getUserById' : ActorMethod<
    [Principal],
    { 'Ok' : { 'id' : Principal, 'userName' : string, 'createdAt' : bigint } } |
      {
        'Err' : { 'Fail' : string } |
          { 'NotFound' : string } |
          { 'Succes' : string }
      }
  >,
  'greet' : ActorMethod<[string], string>,
  'signDocument' : ActorMethod<
    [Principal, Uint8Array | number[], string],
    { 'Fail' : string } |
      { 'NotFound' : string } |
      { 'Succes' : string }
  >,
  'updateUser' : ActorMethod<
    [{ 'id' : Principal, 'userName' : string, 'createdAt' : bigint }],
    { 'Fail' : string } |
      { 'NotFound' : string } |
      { 'Succes' : string }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
