import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout(
                        <Link to="/checkout">{cart?.length} items</Link>
                    )
                </h1>

                <div className="payment__sec">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user? user?.email.split("@")[0] : "Guest"}</p>
                        <p>This lane, That lane</p>
                        <p>Thane (West)</p>
                    </div>
                </div>
                <div className="payment__sec">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {cart.map(item => (
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
                <div className="payment__sec">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                        <p>Cash on Delivery</p>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Payment
