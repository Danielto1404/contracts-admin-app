import {previewContractSlice} from "./slice";
import {AppDispatch} from "../store";
import {getContract, verify} from "../../api/api";
import {Contract, ContractVerificationStatus, ResponseStatusCode} from "../../api/types";

export const fetchContract = (contractId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(previewContractSlice.actions.toggleFetching(true))
        getContract(contractId)
            .then(response => {
                if (response.status === ResponseStatusCode.SUCCESS) {
                    dispatch(previewContractSlice.actions.setContract(response.data))
                }
            })
            .finally(() => dispatch(previewContractSlice.actions.toggleFetching(false)))
    }

export const setVerification = (contractId: string, verification: string) =>
    async () => {
        verify(contractId, verification)
            .then(() => window.location.reload())
            .catch(e => alert(e.message))
    }