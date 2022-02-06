import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {previewContractSlice} from "../store/preview/slice";
import {fetchContract, setVerification} from "../store/preview/thunk";
import ContractCard from "../components/Card/ContractCard";
import {Link} from "react-router-dom";
import BaseButton from "../components/Common/BaseButton";
import {ContractVerificationStatus} from "../api/types";
import BaseLink from "../components/Common/BaseLink";

export type RouterParams = {
    contractId: string
}

const PreviewContract = () => {

    const {contractId} = useParams<RouterParams>()
    const {contract, fetching} = useAppSelector(state => state.previewContract)
    const dispatch = useAppDispatch()

    const [verification, setVerificationOption] = useState("VERIFIED")

    useEffect(() => {
        if (!contractId) {
            return
        }
        dispatch(fetchContract(contractId))
        return () => {
            dispatch(previewContractSlice.actions.reset())
        }
    }, [])

    if (fetching) {
        return <div>Loading...</div>
    }

    if (!contract) {
        return <div className="flex flex-col max-w-2xl mx-auto space-y-6">
            <div className="mt-10 text-xl text-center inline-flex justify-center gap-2">
                Contract:
                <div className="text-blue-600 font-extrabold">{contractId}</div>
                not found
            </div>
            <BaseLink title="Back to all contracts" link="/"/>
        </div>
    }

    return (
        <div className="flex flex-col justify-center my-20 space-y-10 max-w-2xl mx-auto">
            <ContractCard contract={contract}/>
            <div className="space-y-3">
                <div className="bg-blue-200 px-5 py-1 rounded-xl">
                    <select className="w-full focus:outline-0 bg-transparent"
                            onChange={e => {
                                setVerificationOption(e.target.value.toString())
                            }}
                    >
                        <option>{ContractVerificationStatus.Verified}</option>
                        <option>{ContractVerificationStatus.Unverified}</option>
                        <option>{ContractVerificationStatus.NotSupported}</option>
                    </select>
                </div>
                <BaseButton title="Set verification"
                            onClick={() => dispatch(
                                setVerification(contract?.contractId, verification))
                            }
                />
            </div>
            <BaseLink title="Back to all contracts" link="/"/>
        </div>
    );
};

export default PreviewContract;