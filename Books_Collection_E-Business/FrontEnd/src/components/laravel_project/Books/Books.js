import React from 'react'
import BooksList from './BooksList'
import SingleBook from './SingleBook'

import { Route, Switch, Link } from 'react-router-dom'

export default function Books() {
    return (
        <div>
            <Route exact path="/home/books/list" children={<BooksList />} ></Route>
            <Route exact path="/book/details/:id" children={<SingleBook />} ></Route>
        </div>
    )
}
