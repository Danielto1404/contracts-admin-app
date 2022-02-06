import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import ContractCard from "../components/Card/ContractCard";
import {getAllContracts} from "../api/api";
import {fetchAllContracts} from "../store/contracts/thunk";
import SearchContract from "../components/Common/SearchContract";

const Contracts = () => {

    const {contracts, fetching} = useAppSelector(state => state.contracts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllContracts())
    }, [])

    if (fetching) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col items-center mb-10">
            <div className="my-10 space-y-4">
                <div className="text-3xl font-black font-mono text-center">Ban Fucking PARAS please</div>
                <SearchContract/>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {contracts.map(contract => <ContractCard key={contract.contractId}
                                                         contract={contract}/>
                )}
            </div>
        </div>
    );
};

export default Contracts;