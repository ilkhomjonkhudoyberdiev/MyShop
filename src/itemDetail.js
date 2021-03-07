import React, { useState, useEffect } from 'react';

function Item({ match }) {
  const [item, setItem] = useState({});


    useEffect(() => {
       fetchdata();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchdata = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const data = await fetchItem.json();
        setItem(data)
       
    }
    return (
        <div className='itemStyle'>
            <div className='itemImage'>
            <img  src={item.image} alt=""/>
            </div>
            <div className='iteminfo'>
            <h4>{item.title}</h4>
            <ul>
                <li>Price: {item.price}</li>
                <li>Category: {item.category}</li>
                <li>Description: {item.description}</li>
            </ul>
            

            </div>
        </div>
    )
}

export default Item
