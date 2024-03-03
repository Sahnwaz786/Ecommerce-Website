import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductDetail from '../product-list/components/ProductDetail'



function ProductDetailPage() {
  return (
    <div>
        <Navbar>
            <ProductDetail/>
        </Navbar>
    </div>
  )
}

export default ProductDetailPage