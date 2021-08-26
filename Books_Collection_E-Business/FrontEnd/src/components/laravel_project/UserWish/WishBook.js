import React from 'react'
import { Route } from 'react-router-dom'
import WishList from './WishList'
import AddWish from './AddWish'

export default function BookWish() {
    return (
        <div>
            <Route exact path="/user/wish/list" children={<WishList />}></Route>
            <Route exact path="/user/add/wish/:id" children={<AddWish />}></Route>
        </div>
    )
}
