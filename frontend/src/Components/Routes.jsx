import React from 'react'

import {Route,Switch} from 'react-router-dom';
import Accessories from './Accessories';
import Apparel from './Apparel';
import Cart from './Cart';
import HomePage from './HomePage';
import ProductCheck from './ProductCheck';
import Shopall from './Shopall';
import { SingleProduct } from './SingleProduct';
import Login from './Login';
import Signup from './Signup';

function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path='/'>
                    {/* <h1>HOME</h1> */}
                    <HomePage />
                </Route>
                <Route path='/shopall'>
                    <Shopall/>
                </Route>
                <Route path='/apparel'>
                   <Apparel/>
                </Route>
                <Route path='/accessories'>
                    <Accessories/>
                </Route>
                <Route path='/cart'>
                    <Cart/>
                </Route>
                <Route path='/productspage'>
                    <ProductCheck/>
                </Route>
                <Route path='/products/:id'>
                    <SingleProduct/>
                </Route>
                <Route path="/product/cart">
                    <Cart />
                </Route>
                <Route path="/login"><Login /></Route>
                <Route path="/signup"><Signup/></Route>


                
                <Route>
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
