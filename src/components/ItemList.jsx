import React from 'react';

const ItemList = ({items}) => (
    <ul>
        {items.map((i, k) => <li key={k}>{i.value}</li>)}
    </ul>
);

export default ItemList;