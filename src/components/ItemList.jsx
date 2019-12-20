import React from 'react';

const ItemList = ({items}) => (
    <ul>
        {items.map((i, k) => <li key={k}><p>{i.value}</p></li>)}
    </ul>
);

export default ItemList;