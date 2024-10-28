'use client';
import { useState } from "react";

export default function NewItemForm({onAddItem}) {
    const [name, setName]= useState('');
    const [category, setCategory]= useState('Produce');
    const [quantity, setQuantity] = useState(1);

    const generateId = () => Math.random().toString();

    const Increment= () => {
        setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1: prevQuantity))
    }

    const Decrement= () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1: prevQuantity))
    }

    const handleSubmit= (e) =>{
        e.preventDefault();

        const newItem = {id: generateId(), name, quantity, category}
        const item= {name, quantity, category};
        console.log(item);

        // alert("Name: ${name}, Quantity: ${quantity}, Category: ${category}");

        onAddItem(newItem);

        setName('');
        setCategory('produce');
        setQuantity(1);
    }

    return(
        <div className="ml-4 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className=" space-y-4 p-6 bg-gray-800 rounded-lg max-w-md mx-auto">
            <div>
                <label className="block text-gray-400 mb-1">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" className="w-full p-2 border rounded-md bg-gray-700 text-white " required/>
            </div>

            <div>
                <label className="block text-gray-400 mb-1">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}  className="w-full p-2 border rounded-md bg-gray-700 text-white" required>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverage">Beverage</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-white text-black rounded-lg px-3 py-2">
                    <p className="mr-5">{quantity}</p>
                    <button onClick={Decrement} disabled={quantity===1} className="bg-gray-600 text-white px-2 rounded-md disabled:opacity-50">-</button>
                    <button onClick={Increment} disabled={quantity===20} className="bg-blue-500 text-white px-2 rounded-md disabled:opacity-50">+</ button>
                </div>
            </div>

            <div>
                <button type='submit' className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">Add Item</button>
            </div>
            </form>
        </div>
    )
}