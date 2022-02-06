import React from 'react';
import {ContractVerificationStatus} from "../../../api/types";

interface PropTypes {
    verification: ContractVerificationStatus
}

const Verification = React.memo<PropTypes>(({verification}) => {

    let textColor = 'text-black'
    switch (verification) {
        case ContractVerificationStatus.Verified:
            textColor = 'text-green-600'
            break
        case ContractVerificationStatus.Unverified:
            textColor = 'text-purple-700'
            break
        case ContractVerificationStatus.NotSupported:
            textColor = "text-red-600"
            break
    }

    return (
        <div className="inline-flex gap-1 text-sm">
            <div>Verification:</div>
            <div className={`font-bold ${textColor}`}>{verification}</div>
        </div>
    );
});

export default Verification;