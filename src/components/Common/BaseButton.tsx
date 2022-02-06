import React, {MouseEventHandler} from 'react';

interface PropTypes {
    title: string
    onClick: MouseEventHandler
}

const BaseButton: React.FC<PropTypes> = ({title, onClick}) => {
    return (
        <button className="bg-gray-700 rounded-xl px-5 py-1 text-white font-bold hover:bg-gray-800"
                onClick={onClick}>
            {title}
        </button>
    );
};

export default BaseButton;