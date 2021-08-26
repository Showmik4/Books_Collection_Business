import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function BooksList() {

    const [BooksList, setBooksList] = useState([])

    useEffect(async () => {
        let data = await fetch('http://localhost:8000/api/book/list');
        data = await data.json()
        console.log(data)
        setBooksList(data)
    }, [])


    return (
        <section class="space-bottom-3">
            <div class="container">
                <header class="mb-5 d-md-flex justify-content-between align-items-center">
                    <h2 class="font-size-7 mb-3 mb-md-0">Bestselling Books</h2>
                    <a href="../shop/v1.html" class="h-primary d-block">View All <i class="glyph-icon flaticon-next"></i></a>
                </header>
                <div class="js-slick-carousel products no-gutters border-top border-left border-right" data-pagi-classes="d-xl-none text-center position-absolute right-0 left-0 u-slick__pagination mt-4 mb-0" data-arrows-classes="d-none d-xl-block u-slick__arrow u-slick__arrow-centered--y" data-arrow-left-classes="fas fa-chevron-left u-slick__arrow-inner u-slick__arrow-inner--left ml-lg-n10" data-arrow-right-classes="fas fa-chevron-right u-slick__arrow-inner u-slick__arrow-inner--right mr-lg-n10" data-slides-show="5" data-responsive='[{
                   "breakpoint": 1500,
                   "settings": {
                     "slidesToShow": 4
                   }
                },{
                   "breakpoint": 1199,
                   "settings": {
                     "slidesToShow": 3
                   }
                },{
                   "breakpoint": 992,
                   "settings": {
                     "slidesToShow": 2
                   }
                }, {
                   "breakpoint": 768,
                   "settings": {
                     "slidesToShow": 1
                   }
                }, {
                   "breakpoint": 554,
                   "settings": {
                     "slidesToShow": 1
                   }
                }]'>

                    {BooksList.map((book) =>

                        <div class="product">
                            <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                    <div class="woocommerce-loop-product__thumbnail">
                                        <Link to={`/book/details/${book.Id}`} className="d-block">
                                            <img src={book.BookSampleImage1} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" />
                                        </Link>
                                    </div>
                                    <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                        <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="{{url('/book/bookById')}}">Paperback</a></div>
                                        <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                            <Link to={`/book/details/${book.Id}`}>{book.Name}</Link>
                                        </h2>
                                        <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700"> {book.AuthorName}</a></div>
                                        <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                            <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">Taka </span> {book.Price}</span>
                                        </div>
                                    </div>
                                    <div class="product__hover d-flex align-items-center">
                                        <Link to={`/book/details/${book.Id}`} class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                            <span class="product__add-to-cart">ADD TO CART</span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                        </Link>
                                        <Link to={`/user/add/wish/${book.Id}`} >
                                            <span class="product__add-to-cart">Save in Wishlist </span>
                                            <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                        </Link>
                                    </div>

                                </div>
                                <Link to={`/shop/details/${book.shop_id_ref_books}`}>
                                    <i class="fas fa-store-alt"> Shop Name</i>
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}
