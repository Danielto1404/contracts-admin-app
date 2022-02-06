import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {contractsReducer} from "./contracts/slice";
import {previewContractReducer} from "./preview/slice";

export const rootReducer = combineReducers({
    contracts: contractsReducer,
    previewContract: previewContractReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']