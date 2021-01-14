import React from 'react'
import Products from './section/Products'
import Details from './section/Details'
import { Route } from 'react-router-dom'
import Cart from './section/Cart'

export default function Section() {

   return (
      <section>
         <Route path="/" component={Products} exact />
         <Route path="/products/:id" component={Details} />
         <Route path="/cart" component={Cart} />
      </section>
   )
}
