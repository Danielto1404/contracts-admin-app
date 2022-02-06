import React from 'react';

interface PropTypes {
    title: string
}

const Title = React.memo<PropTypes>(({title}) => {
    return (
        <div className="text-center font-bold font-mono text-black text-lg">
            {title}
        </div>
    );
});

export default Title;