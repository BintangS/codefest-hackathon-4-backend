import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Document {
  'id' : string,
  'ownerId' : Principal,
  'createdAt' : Time,
  'signedAt' : Time,
  'signedBy' : Principal,
  'document' : Uint8Array | number[],
}
export type Result = { 'ok' : User } |
  { 'err' : string };
export type Result_1 = { 'ok' : Document } |
  { 'err' : string };
export type Result_2 = { 'ok' : boolean } |
  { 'err' : string };
export type Time = bigint;
export interface User {
  'id' : Principal,
  'userName' : string,
  'createdAt' : Time,
}
export interface _SERVICE {
  'createDocument' : ActorMethod<
    [Principal, Uint8Array | number[], Principal],
    Document
  >,
  'createDocumentUsingEmail' : ActorMethod<
    [Principal, Uint8Array | number[], string],
    Result_1
  >,
  'createUser' : ActorMethod<[Principal, string], Result>,
  'deleteUser' : ActorMethod<[Principal], Result_2>,
  'getAllDocumentByUser' : ActorMethod<[Principal], Array<Document>>,
  'getDocumentByIdAndSigneeId' : ActorMethod<[string, Principal], Result_1>,
  'getUserById' : ActorMethod<[Principal], Result>,
  'greet' : ActorMethod<[string], string>,
  'signDocument' : ActorMethod<
    [Principal, Uint8Array | number[], string],
    string
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
