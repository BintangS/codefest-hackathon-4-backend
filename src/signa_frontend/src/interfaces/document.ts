import type { Principal } from "@dfinity/principal";

export interface DocumentInterface {
    id: string;
    ownerId: Principal;
    createdAt: bigint;
    signedAt: bigint;
    signedBy: Principal;
    document: Uint8Array | number[];
}