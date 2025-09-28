import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='px-4 lg:mr-[10px] hover:bg-amber-300 '>
            <a href={route.path}>{route.label}</a>
        </li>
    );
};

export default Link;