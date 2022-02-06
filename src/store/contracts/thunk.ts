import {contractsSlice,} from "./slice";
import {AppDispatch} from "../store";
import {getAllContracts} from "../../api/api";
import {ResponseStatusCode} from "../../api/types";

export const fetchAllContracts = () =>
    async (dispatch: AppDispatch) => {
        dispatch(contractsSlice.actions.toggleFetching(true))
        getAllContracts()
            .then(response => {
                if (response.status === ResponseStatusCode.SUCCESS) {
                    dispatch(contractsSlice.actions.setContracts(response.data))
                }
            })
            .finally(() => dispatch(contractsSlice.actions.toggleFetching(false)))
    }