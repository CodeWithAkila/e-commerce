import React from 'react'
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
       <div className='descriptionbox-nav-box'> Description</div>
      <div className='descriptionbox-nav-box fade'>
        Reviews (122)
      </div>
      </div>
      <div className='descriptionbox-description'>
        <p>An e-commerce websites is an online platform that facilitate
            buying and selling of products or services over the internet
            serves as a virtual marketplace where businesses and individual
            showcase their products, interact with customers, and conduct transactions 
            without the need for a physical presence. E-commerce websites have gained immense 
            popularity sue to their conventional accessibility, and the global reach they offer.</p>
        
        <p>E-Commerce website typically display products or services and detailed descriptions, images, prices and any available varaibles.
            (e.g.,sizes, colors). Each product usually has its own dedication with relevant information.
        </p>
      </div>
    
    </div>
  )
}

export default DescriptionBox