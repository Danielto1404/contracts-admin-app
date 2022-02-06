import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Contract} from "../../api/types";

export interface ProfileState {
    contracts: Contract[],
    fetching: boolean,
}

const initialState: ProfileState = {
    fetching: false,
    contracts: [],
}

export const contractsSlice = createSlice({
    name: "all-contracts",
    initialState,
    reducers: {
        setContracts: (state, action: PayloadAction<Contract[]>) => {
            state.contracts = action.payload
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})

export const contractsReducer = contractsSlice.reducer