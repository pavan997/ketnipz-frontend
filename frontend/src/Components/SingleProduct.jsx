import React from 'react'
import { useHistory, useParams } from 'react-router'
import { useState, useEffect } from "react";
import axios from 'axios';
import style from './SingleProduct.module.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';


export function SingleProduct() {
  const params = useParams();
  //console.log(params);

  // const [product, setProduct] = useState([]);
  const history=useHistory()
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  function handleQuantity(num) {
    setQuantity(quantity+num)
  }


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await axios.get(`http://localhost:8000/prod/${params.id}`);
     console.log(data);
    setProduct(data);
  }
  // getData()
  async function cartData() {
    const payload = { productId : params.id,quantity:quantity }
    const response = await axios.post('http://localhost:8000/cart', payload);
    history.push("/product/cart")
    console.log("response", response);
}

  return (
    <div className={style._main}>
            <div>
                <div className={style.headingtags}> 
                    <div><Link className={style.lkto} to='/'>HOME</Link>  </div>
                    <div><span aria-hidden="true">›</span></div>
                    <div><Link className={style.lkto} to='/shopall'>SHOPALL</Link></div>
                    <div><span aria-hidden="true">›</span></div>
                    <div><div className={style.lkto2}>{product.title}</div></div>
                </div>
                <img src={product.image} width='650' height ='650' alt='/' />
                    {/* <h1>{product.desc1}</h1>
                    <h1>{product.desc2}</h1>
                    <h1>{product.desc3}</h1> */}
            </div>
            <div className={style._rightMain}>
                
                <p>{'$'}{product.price}.00</p>
                <p>AFTER PAY AVAILABLE FOR ORDERS OVER {'$'}35 </p><br/>
                <h3>{product.title}</h3>
                <br/>
                <ul>
                    <li>{product.desc1}</li>
                    <li>{product.desc2}</li>
                    <li>{product.desc3}</li>
                </ul>
                <div className={ style.quantityDiv}>
                <button onClick={() => handleQuantity(-1)} disabled={ quantity===1?true:false}>-</button><span>{quantity}</span><button onClick={()=>handleQuantity(1)}>+</button>
              </div>


                <select className={style.size}>
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                </select>
                <br/>
                <br/>
                {/* <button onClick={()=>cart(data)} className={style.addbtn}>ADD TO CART - {'$'}{product.price}</button> */}
                <button onClick={() => cartData()} className={style.bt}>ADD TO CART ₹{quantity*product.price}.00</button>
                </div>

    </div>
  );
}
