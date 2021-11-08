import React from 'react'
import styles from './Cart.module.css'


function CartComponent({pro}) {
    return (
        <div>
             <div className={styles.line2}>
                <div>
                <img src={pro.image} />
                </div>
                <div>{pro.title}</div>
                <div>${pro.price}</div>
                <div>{pro.quantity}</div>
                <div>${pro.quantity*pro.price}</div>
            </div>
            
        </div>
    )
}

export default CartComponent
