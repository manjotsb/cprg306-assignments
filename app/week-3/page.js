import React from "react";
import ItemList from "./item-list";

const Page= () => {
    return(
        <main>
            <h1 className="font-bold text-2">Shopping List</h1>
            <ItemList/>
        </main>
    );
};

export default Page;