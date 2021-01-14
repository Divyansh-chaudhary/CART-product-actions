import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import Color from './Color'
import '../css/details.css'

function Details(props) {
   const [detailState, setState] = useState({ product: [] });
   const { state, addCart } = useContext(DataContext);
   const { products } = state;

   const getProduct = () => {
      if (props.match.params.id) {
         const data = products.filter(item => {
            return props.match.params.id === item.title
         });
         setState({ product: data });
      }
   }

   useEffect(() => {
      getProduct();
   }, []);

   const { product } = detailState;

   return (
      <div>
         {product.map((item) => {
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
                     <button onClick={() => addCart(item.id)} >add to cart</button>
                  </div>
               </div>
            )
         })}
      </div>
   )
}
export default Details;