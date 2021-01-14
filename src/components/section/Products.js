import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/product.css'

export default function Products() {
   const { state, addCart } = useContext(DataContext);
   const { products } = state;

   return (
      <div id='products'>
         {products.map((product) => {
            return (
               <div className="card" key={product.id}>
                  <Link to={`/products/${product.title}`}>
                     <img src={product.src} />
                  </Link>
                  <div className="content">
                     <h3>
                        <Link to={`/products/${product.title}`}>
                           {product.title}
                        </Link>
                     </h3>
                     <p className="price">${product.price}</p>
                     <p className="desc">{product.description}</p>
                  </div>
                  <button onClick={() => addCart(product.id)} >add to cart</button>
               </div>
            )
         })}
      </div>
   );
};
