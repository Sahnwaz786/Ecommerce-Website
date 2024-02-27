import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductList from '../product-list/ProductList'


function Home() {
  return (
   <div>
    <Navbar>
    <ProductList/>
    </Navbar>
    
  
   </div>
  )
}

export default Home