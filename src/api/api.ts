import axios, {AxiosRequestConfig} from "axios";
import {Contract, StatusResponse} from "./types";

const baseURL = "https://mjolnear-contracts-indexer.herokuapp.com/api.mjolnear.com"
const instance = axios.create({
    baseURL
})


export const get = async <T>(endpoint: string, config?: AxiosRequestConfig) => {
    return await instance.get<StatusResponse<T>>(endpoint, config).then(response => response.data)
}

export const post = async <T, D>(endpoint: string,data?: D, config?: AxiosRequestConfig) => {
    return await instance.post(endpoint, data, config).then(response => response.data)
}

export const getAllContracts = async () => get<Contract[]>('/contracts')
export const getContract = async (contractId: string) => get<Contract>(`/contracts/${contractId}`)


export const verify = async (contractId: string, verification: string) =>
    post("/contracts/verification", {
        contractId,
        verification
    })