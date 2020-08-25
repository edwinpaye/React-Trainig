import React from 'react';

export default function TableHeader({titles}){ 
    return (<tr>
        {titles.map(title => (
            <th key = {title}>{title}</th>
        ))}
    </tr>);
};