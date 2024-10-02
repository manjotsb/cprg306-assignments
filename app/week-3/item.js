import React from "react";

const Item= ({name, quantity , category}) => {
    return( 
        <li>
            <div className="inline-flex flex-col w-auto bg-blue-950 p-4 m-3">
                <h3 className="font-bold text-xl">
                    {name}
                </h3>
                <p>
                    Buy {quantity} in {category}
                </p>
            </div>
        </li>
    );
}

export default Item;