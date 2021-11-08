import axios from 'axios'
import React from 'react'
import styles from './HomePage.module.css';
import { useState, useEffect} from 'react';
import ProductCheck from './ProductCheck';


function HomePage() {

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const {data} = await axios.get('http://localhost:8000/prod')
        console.log(data);
        // setTimeout(()=>{ setProducts(data)},1000)
        setProducts(data)
    

    }
    // getData()
    return (
        <div>
            
            <img  className={styles.img_Main} src={'https://cdn.shopify.com/s/files/1/2028/6907/files/fall_promo_banner_V2_2048x.gif?v=1634922078'} alt='' />
            <div className={styles.dis}>
            {products.map((item)=>{
                return (
                <div><ProductCheck key={item.id} {...item}/></div>
                )
            })}
            </div>
            

        </div>
    )
}

export default HomePage
