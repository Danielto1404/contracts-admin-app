import React from 'react';
import {Contract} from "../../api/types";
import Title from "./Blocks/Title";
import Neps from "./Blocks/Neps";
import Verification from "./Blocks/Verification";
import BooleanText from "./Blocks/BooleanText";
import { Link } from 'react-router-dom';

interface PropTypes {
    contract: Contract
}

const ContractCard: React.FC<PropTypes> = ({contract}) => {
    return (
        <Link className="w-full ring-1 ring-gray-300 rounded-xl py-1 px-3 flex flex-col items-center gap-2 hover:bg-gray-100"
              to={`/${contract.contractId}`}
        >
            <Title title={contract.contractId}/>
            <Verification verification={contract.verification}/>
            <BooleanText title="Is correct" value={contract.isCorrect}/>
            <BooleanText title="Has payouts" value={contract.hasPayouts}/>
            <Neps title="Supported:" neps={contract.supportedNeps}/>
            <Neps title="Missed:" neps={contract.missedNeps}/>
        </Link>
    );
};

export default ContractCard;