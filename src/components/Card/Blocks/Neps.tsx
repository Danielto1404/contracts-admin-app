import React from 'react';

interface PropTypes {
    title: string,
    neps: string[]
}

const Neps: React.FC<PropTypes> = ({title, neps}) => {
    return (
        <div className="inline-flex gap-1 justify-start text-sm w-full">
            <div>{title}</div>
            <div className="text-blue-500 font-bold">{neps.length === 0 ? "empty" : neps.join(", ")}</div>
        </div>
    );
};

export default Neps;