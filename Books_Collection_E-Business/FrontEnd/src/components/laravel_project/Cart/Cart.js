import React from 'react'
import { Route } from 'react-router-dom'
import CartList from './CartList'
import Protected from '../Common_Compo/Protected'

export default function Cart() {
    return (
        <div>
            <Route exact path="/cart/list" >
                <Protected cmp={CartList}></Protected>
            </Route>
        </div>
    )
}
