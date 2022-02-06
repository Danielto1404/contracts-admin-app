import React from 'react';

interface PropTypes {
    title: string,
    value: boolean
}

const BooleanText = React.memo<PropTypes>(({title, value}) => {


    const textColor = value ? "text-green-600" : "text-red-600"

    return (
        <div className="inline-flex gap-1 text-sm w-full justify-start">
            <div>{title}:</div>
            <div className={`font-bold ${textColor}`}>{value.toString()}</div>
        </div>
    );
});

export default BooleanText;