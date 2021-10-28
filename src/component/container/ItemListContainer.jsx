import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer ({gretting}){
    const carrito =(total) =>{
        alert(`La cantidad que agregaste es de ${total} PROductos`)
    }
    return(
        <div>
            {gretting}
            <ItemCount stock={8} initial={1} onAdd={carrito}/>
            
        </div>
    )
}