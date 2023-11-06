import React from 'react';

export default function NameList ({list}) {
    const listName = list.map((nom) => 
    <li>{nom}</li>);
    return(
        <ul>{listName}</ul>
    )
}