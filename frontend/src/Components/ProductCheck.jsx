import React from 'react'
import {Link} from 'react-router-dom'
import style from './ProductCheck.module.css'

function ProductCheck({image,title,price,_id}) {
    // console.log(image,title,price,id)
    
    return (
        <div>
            <div>
                <Link to={`/products/${_id}`}>
                        <img src={image}  width='170' height='170' alt='test' />
                        <div>{title}</div><br/>
                        <div>{price}</div>
                </Link>
            </div>
        </div>
    )
}

export default ProductCheck
