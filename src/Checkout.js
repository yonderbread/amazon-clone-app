import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div>
                <h2 className="checkout-title">Your shopping basket is empty.</h2>
                <p>You have no items in your basket. Once you have added items to your basket, they will appear here.</p>
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout