'use client'
import { useState, StyleSheet } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {

  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className='inline-flex'>
        <p className='p-2'>Sort By : </p>
        <button className='px-4 mr-2 bg-orange-500'
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button className='px-4 bg-red-600'
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      <ul className='p-2'>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
