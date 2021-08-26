import React, { useEffect, useState } from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom';
import NavBar from '../Common_Compo/NavBar';

export default function CartList() {

    const [CartBookList, setCartBookList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    let total = 0
    let space = "  "
    //const [pricebyQuantity, setPricebyQuantity] = useState([])
    let pricebyQuantity = []

    useEffect(async () => {
        let data = await fetch('http://localhost:8000/api/book/cart/list?userid=' + localStorage.getItem("userid"));
        data = await data.json()
        console.clear()
        console.log(data)
        setCartBookList(data)

        // if (CartBookList.length > 0) {
        //     CartBookList[1].map((book, index) => {
        //         setTotalPrice(totalPrice + CartBookList[0][index].Quantity * book.Price)
        //     })
        //     setTotalPrice(totalPrice)
        // }

    }, [])

    const updateTotalCartPrice = async (e) => {
        if (CartBookList.length > 0) {
            CartBookList[1].map((book, index) => {
                //setTotalPrice()
                console.log(totalPrice + CartBookList[0][index].Quantity * book.Price);
            })
        }

    }

    if (CartBookList.length < 1) {
        return <p>Data is loading</p>
    } else if (CartBookList[0].length < 1) {
        return <>
            <NavBar />
            <h3>No Book in Cart List</h3>
        </>
    }
    else {

        return (

            <>
                <NavBar />
                <div className="site-content bg-punch-light overflow-hidden" id="content">
                    <div className="container">
                        <header className="entry-header space-top-2 space-bottom-1 mb-2">
                            {/* <h1 className="entry-title font-size-7">Your cart: {{ count($data[1])}} items</h1> */}
                        </header>
                        <div className="row pb-8">
                            <div id="primary" className="content-area">
                                <main id="main" className="site-main ">
                                    <div className="page type-page status-publish hentry">

                                        <div className="entry-content">
                                            <div className="woocommerce">
                                                <form className="woocommerce-cart-form table-responsive" action="#" method="post">
                                                    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                                                        <thead>
                                                            <tr>
                                                                <th className="product-name">Product</th>
                                                                <th className="product-price">Price</th>
                                                                <th className="product-quantity">Quantity</th>
                                                                <th className="product-subtotal">Total</th>
                                                                <th className="product-remove">&nbsp;</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>


                                                            {CartBookList[1].map((book, index) =>
                                                                <tr className="woocommerce-cart-form__cart-item cart_item">
                                                                    <td className="product-name" data-title="Product">
                                                                        <div className="d-flex align-items-center">
                                                                            <a href="#">
                                                                                <img src={book.BookSampleImage1} width="120px" height="150px" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                                            </a>
                                                                            <div className="ml-3 m-w-200-lg-down">
                                                                                <a href="#">{book.Name}</a>
                                                                                <a href="#" className="text-gray-700 font-size-2 d-block" tabindex="0">{book.AuthorName}</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="product-price" data-title="Price">
                                                                        <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">Taka </span>{book.Price}</span>
                                                                    </td>
                                                                    <td className="product-quantity" data-title="Quantity">
                                                                        <div className="quantity d-flex align-items-center">

                                                                            <div className="border px-3 width-120">
                                                                                <div className="js-quantity">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <label className="screen-reader-text sr-only">Quantity</label>
                                                                                        <a className="js-minus text-dark" href="javascript:;">

                                                                                        </a>

                                                                                        <input type="number" value={CartBookList[0][index].Quantity} readonly className="input-text qty text js-result form-control text-center border-0" step="1" min="1" max="100" name="quantity" title="Qty" />


                                                                                        <a className="js-plus text-dark" href="javascript:;">

                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </td>
                                                                    <td className="product-subtotal" data-title="Total">
                                                                        {/* <span className="woocommerce-Price-amount amount">
                                                                <span className="woocommerce-Price-currencySymbol">Taka </span>
                                                                {{ $data[0][$key] -> Quantity * $book -> Price }}</span>
                                                            @php
                                                    $totalCartPrice = $totalCartPrice + $data[0][$key]->Quantity * $book->Price
                                                            @endphp */}
                                                                        {
                                                                            pricebyQuantity[index] = (CartBookList[0][index].Quantity * book.Price)
                                                                        }

                                                                    </td>
                                                                    <td className="product-remove">
                                                                        <a href="#" className="remove" aria-label="Remove this item">

                                                                        </a>
                                                                    </td>

                                                                </tr>

                                                            )}

                                                            <tr>
                                                                <td colSpan="5" className="actions">

                                                                    <input type="submit" className="button" name="update_cart" value="Update cart" />
                                                                    <input type="hidden" id="_wpnonce" name="_wpnonce" value="db025d7a70" /><input type="hidden" name="_wp_http_referer" value="/storefront/cart/" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </main>
                            </div>
                            <div id="secondary" className="sidebar cart-collaterals order-1" role="complementary">
                                <div id="cartAccordion" className="border border-gray-900 bg-white mb-5">


                                    {/* <button onClick={updateTotalCartPrice}>Get Total Price</button> */}

                                    <div className="p-4d875 border">
                                        <table className="shop_table shop_table_responsive">
                                            <tbody>
                                                <tr className="order-total">
                                                    <th>Total: &nbsp;</th>
                                                    <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"> {total = pricebyQuantity.reduce((a, b) => a + b, 0)}</span> <span className="woocommerce-Price-currencySymbol"> Taka </span></strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="wc-proceed-to-checkout">
                                    <Link to="/order/checkout" className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4">Proceed
                                        to checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
