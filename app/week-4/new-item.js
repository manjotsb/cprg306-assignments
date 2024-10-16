'use client';
import { useState } from "react";

export default function newItem(){
    const [quantity, setQuantity] = useState(1);

    const Increment= () => {
        setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1: prevQuantity))
    }

    const Decrement= () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1: prevQuantity))
    }

    return(
        <div className="flex justify-center">
            <div className="inline-block bg-white text-black pt-2 pb-2 pl-1 pr-1    rounded-xl">
                <p className="m-2">{quantity}</p>
                <button onClick={Decrement} disabled={quantity===1} className="bg-blue-400 pr-4 pl-4 rounded m-1 disabled:bg-gray-400">-</button>
                <button onClick={Increment} disabled={quantity===20} className="bg-blue-400 pr-4 pl-4 m-1 rounded disabled:bg-gray-400">+</button>
            </div>
        </div>
    );
}

