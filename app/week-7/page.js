'use client'
import React from 'react';
import NewItemForm from './new-item';
import { useState } from 'react';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main>
      <h1 className='font-bold text-2xl p-4'>Shopping List</h1>
      <NewItemForm onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  );
}
