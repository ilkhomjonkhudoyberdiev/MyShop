import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
function Shop() {
  const [items, setItems] = useState([]);


    useEffect(() => {
        fetchdata();
    }, [])
    const fetchdata = async () => {
         const data =  await fetch('https://fakestoreapi.com/products')
         const items = await data.json();
         console.log(data)
         setItems(items)
    }
    return (
        <div className="shopItems">
           
            {items.map((t) => (
                <div className="shopitem">
                 <Link className="link" key={t.id} to={`/shop/${t.id}`}>
                 {t.title}</Link> 
                 <img className="image1" src={t.image} alt=""/>
                 
                  
                   </div>
            ))}

        </div>
    )
}

export default Shop
