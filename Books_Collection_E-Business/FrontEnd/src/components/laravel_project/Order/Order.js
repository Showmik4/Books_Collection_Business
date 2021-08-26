import React from 'react'
import { Route } from 'react-router-dom'
import Checkout from './Checkout'
import OrderById from './OrderById'
import OrderList from './OrderList'

export default function Order() {
    return (
        <div>
            <Route exact path="/order/checkout" children={<Checkout />}></Route>
            <Route exact path="/my/order/list" children={<OrderList />}></Route>
            <Route exact path="/my/orderid/:id" children={<OrderById />}></Route>
        </div>
    )
}
