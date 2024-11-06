'use client'
import React from 'react';
import NewItemForm from './new-item';
import MealIdeas from './meal-ideas';
import { useState } from 'react';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    setSelectedItemName(item.name);
  };

  return (
    <main>
      <h1 className='font-bold text-2xl p-4'>Shopping List</h1>
      <NewItemForm onAddItem={handleAddItem}/>
      <ItemList items={items} onItemSelect={{handleItemSelect}}/>

      {setSelectedItemName && (
        <MealIdeas ingredient={selectedItemName}/>
      )}
    </main>
  );
}
