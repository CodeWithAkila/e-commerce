import React, { useContext, useEffect, useState } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItems = () => {
    
    const {getTotalCartAmount,all_product ,cartItems, removeFromCart} = useContext(ShopContext);
    const [availableCart, setAvailableCart] = useState([])

    useEffect(() => {
       setCart()
    }, [])

    const setCart = () => {
        let cartData = []
        all_product.forEach((product) => {
            if (cartItems[product.id] > 0) {
                let cart = {...product}
                cart.quantity = cartItems[cart.id]
                cartData.push(cart)
            }
        })
        setAvailableCart(cartData)
        // console.log("Cart", cartData)
    }


  return (
    

    <div className='cartitems'>

        <table >
            <thead>
                <tr>
                    <th>Products</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
               {
                 (availableCart.length > 0) ? (
                    availableCart.map((product, index) => (
                        <tr key={index}>
                            <td>
                               <img src={product.image} alt="" />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.new_price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.quantity * product.new_price}</td>
                            <td>
                                <img src={remove_icon} alt="" />
                            </td>
                        </tr>
                    ))
                 ) : (
                    <tr align="center">
                        <td colSpan={6}>No Products</td>
                    </tr>
                 )
               }
            </tbody>
        </table>

<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>cart Totals</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
        </div>
        <button>Proceed To Checkout</button>
    </div>
    <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here</p>
    <div className="cartitems-promobox">
        <input type='text' placeholder='promo code' />
    <button>Submit</button>
    </div>
    </div>
</div>
    </div>
  )
}

export default CartItems