import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Contract} from "../../api/types";

export interface PreviewContractState {
    contract?: Contract,
    fetching: boolean,
}

const initialState: PreviewContractState = {
    fetching: false,
}

export const previewContractSlice = createSlice({
    name: "preview-contract",
    initialState,
    reducers: {
        setContract: (state, action: PayloadAction<Contract>) => {
            state.contract = action.payload
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})

export const previewContractReducer = previewContractSlice.reducer