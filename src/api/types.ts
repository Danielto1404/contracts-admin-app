export enum ContractVerificationStatus {
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    NotSupported = "NOT_SUPPORTED"
}

export interface Contract {
    contractId: string
    isCorrect: boolean,
    hasPayouts: boolean,
    verification: ContractVerificationStatus
    supportedNeps: string[]
    missedNeps: string[]
}

export enum ResponseStatusCode {
    FAILURE = 0,
    SUCCESS = 1
}

export interface StatusResponse<T> {
    status: ResponseStatusCode
    data: T
}

// export interface FailureResponse extends StatusResponse {
//     error: any
// }
//
// export interface SuccessResponse<T> extends StatusResponse {
//     data: T
// }