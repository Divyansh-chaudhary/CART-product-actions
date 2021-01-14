import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from '../Context'
import Color from './Color'
import '../css/details.css'

export default function Cart(props) {
   const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(DataContext);

   return (
      <div>
         {cart.map(item => {
            return (
               <div className="details" key={item.id}>
                  <img src={item.src} alt='img' />
                  <div className="box">
                     <div className="row">
                        <h2>{item.title}</h2>
                        <span>${item.price}</span>
                     </div>
                     <Color item={item} />
                     <p>{item.description}</p>
                     <p>{item.content}</p>
                     <div className="quantity">
                        <button onClick={() => decreaseQty(item.id)} className='count'> - </button>
                        <span>{item.count}</span>
                        <button onClick={() => increaseQty(item.id)} className='count'> + </button>
                     </div>
                     <div className="remove" onClick={() => removeFromCart(item.id)}>X</div>
                  </div>
               </div>
            )
         })}
      </div>
   )
}