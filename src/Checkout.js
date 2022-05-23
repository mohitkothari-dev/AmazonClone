import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    //using a UseStateValue Hook over here//h3 tag as optional chaining
    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__home">
                <img src="../banner-ad.png" alt="ad" className="checkout__ad"/>
                <div>
                    <h3>Hello, {user? user?.email.split("@")[0] : "Guest"}</h3>
                    <h2 className="checkout__title">Shopping Cart</h2>
                    {cart.map(item=> (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__sidebar">
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout
