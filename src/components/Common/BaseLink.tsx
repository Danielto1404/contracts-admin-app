import React from 'react';
import {Link} from "react-router-dom";

interface PropTypes {
    title: string,
    link: string
}

const BaseLink = React.memo<PropTypes>(({title,link}) => {
    return (
        <Link to={link} className="text-center px-5 rounded-xl text-white bg-blue-500 font-bold py-2 hover:bg-blue-700">
            {title}
        </Link>
    );
});

export default BaseLink;