import React, { createContext, useState } from 'react'
import Shoe1 from './img/air-jordan.jpg'
import shoe2 from './img/air-zoom-super.jpg'
import shoe3 from './img/air-zoom.jpg'
import shoe5 from './img/lebron-witnes.jpg'
import shoe6 from './img/jordan-one.jpg'

export const DataContext = createContext();

export const DataProvider = (props) => {
   const [state, setState] = useState({
      products: [
         {
            "id": "1",
            "title": "Nike Shoes 01",
            "src": Shoe1,
            "description": "UI/UX Designer html css tutorials",
            "content": "Welcome to our react website Welcome to our react website Welcome to our react website Welcome to our react website v Welcome to our react website",
            "color": ["red", "blue", "black", "green"],
            "price": "23"
         },
         {
            "id": "2",
            "title": "Nike Shoes 02",
            "src": shoe2,
            "description": "UI/UX Designer html css tutorials",
            "content": "Welcome to our react website Welcome to our react website Welcome to our react website Welcome to our react website v Welcome to our react website",
            "color": ["red", "blue", "black", "green"],
            "price": "23"
         },
         {
            "id": "3",
            "title": "Nike Shoes 03",
            "src": shoe3,
            "description": "UI/UX Designer html css tutorials",
            "content": "Welcome to our react website Welcome to our react website Welcome to our react website Welcome to our react website v Welcome to our react website",
            "color": ["red", "blue", "black", "green"],
            "price": "23"
         },
         {
            "id": "4",
            "title": "Nike Shoes 04",
            "src": Shoe1,
            "description": "UI/UX Designer html css tutorials",
            "content": "Welcome to our react website Welcome to our react website Welcome to our react website Welcome to our react website v Welcome to our react website",
            "color": ["red", "blue", "black", "green"],
            "price": "23"
         },
         {
            "id": "5",
            "title": "Nike Shoes 05",
            "src": shoe5,
            "description": "UI/UX Designer html css tutorials",
            "content": "Welcome to our react website Welcome to our react website Welcome to our react website Welcome to our react website v Welcome to our react website",
            "color": ["red", "blue", "black", "green"],
            "price": "23"
         },
         {
            "id": "6",
            "title": "Nike Shoes 06",
            "src": shoe6,
            "description": "UI/UX Designer html css tutorials",
            "content": "Welcome to our react website Welcome to our react website Welcome to our react website Welcome to our react website v Welcome to our react website",
            "color": ["red", "blue", "black", "green"],
            "price": "23"
         }
      ],
      cart: []
   });

   const { products, cart } = state;

   const addCart = id => {
      const check = cart.every(item => item.id !== id);
      if (check) {
         const data = products.filter(item => item.id === id);
         const mData = data[0];
         mData.count = 1;
         setState({ products: [...products], cart: [...cart, mData] });
      } else {
         alert("Product is already in cart");
      }
   }

   const increaseQty = id => {
      cart.forEach(item => {
         if (item.id === id) {
            item.count++;
         }
      });
      setState({ products: [...products], cart: [...cart] });
   }

   const decreaseQty = id => {
      cart.forEach(item => {
         if (item.id === id) {
            item.count === 1 ? item.count = 1 : item.count--;
         }
      });
      setState({ products: [...products], cart: [...cart] });
   }

   const removeFromCart = (id) => {
      if (window.confirm('Are you sure you want to delete product from cart')) {
         cart.forEach((item, index) => {
            if (item.id === id) {
               cart.splice(index, 1);
            }
         });
         setState({ products: [...products], cart: [...cart] });
      }
   }


   return (
      <DataContext.Provider
         value={{ state, addCart, cart, increaseQty, decreaseQty, removeFromCart }}
      >
         { props.children}
      </DataContext.Provider>
   );
}