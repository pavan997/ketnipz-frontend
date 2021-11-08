import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from "react";
import axios from 'axios';
import styles from './Cart.module.css';
import CartComponent from './CartComponent';

import { Link } from 'react-router-dom';


  

function Cart() {
  const params = useParams();
  //console.log(params);

  const [pro, setPro] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let { data } = await axios.get("http://localhost:8000/cart");
    console.log("databefore", data);
    data = data.map((item) => {
      item.productId.quantity=item.quantity
      return item.productId
    })
    console.log("dataafter", data);
    let price = 0;
    data.forEach((item) => {
      price += (item.quantity===undefined?1:item.quantity*item.price);
    })
     console.log(data);
    setPro(data);
    setTotal(price);
  }

  // getData()
  return (
    <>
      <div className={styles.line1}>
        <div>Your Cart</div>
        <div></div>
        <div>$Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>
      {/* <div className={styles.downpart}>
      <div>{'subtotal : $39'}</div>
      <p>available for orders over {'$'}35</p>
      <p>shipping and taxes calculated at checkout</p>
      <button>CHECK OUT</button>
      </div> */}
     
      {pro.map((item) => {
          return <CartComponent pro ={item} />
        })}
           <div className={styles.bottom}>
                <div>SUBTOTAL ₹{total}.00</div>
                <br/>
                <div>Shipping & taxes calculated at checkout</div>
                <br/>
                <button className={styles.btn}>CHECK OUT</button>
                </div>

    </>
  );
}

export default Cart;
