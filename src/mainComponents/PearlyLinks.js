import React from 'react';

const PearlyLinks = (props) =>{
    return(
        <a 
            href={props.link}
            className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"
        >
                {props.title}
        </a>
    );
}

export default PearlyLinks;