import React, { useEffect, useState } from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom';

function SingleBook(props) {

    const [book, setBookDetails] = useState([])
    const [quantity, setQuantity] = useState(1)

    const history = useHistory()

    useEffect(async () => {
        let data = await fetch('http://localhost:8000/api/book/details/' + props.match.params.id);
        data = await data.json()
        
        setBookDetails(data)
        console.log("book details: " + book)
    }, [])

    const handleAddToCart = async (e) => {
        e.preventDefault()

        if ("valid" == "valid") {
            let result = await fetch("http://localhost:8000/api/book/add/cart/" + props.match.params.id, {
                method: 'POST',
                body: JSON.stringify({
                    userid: 1,
                    id: props.match.params.id,
                    quantity
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then(response => response.json())
            history.push("/cart/list")
            console.log(result);
        }
    }

    return (
        <div>
            <div id="primary" class="content-area">
                <main id="main" class="site-main ">
                    <div class="product">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-5 woocommerce-product-gallery woocommerce-product-gallery--with-images images">
                                    <figure class="woocommerce-product-gallery__wrapper pt-8 mb-0">
                                        <div class="js-slick-carousel u-slick" data-pagi-classes="text-center u-slick__pagination my-4">
                                            <div class="js-slide">
                                                <img src={book.BookSampleImage1} alt="Image Description" class="mx-auto img-fluid" />
                                            </div>
                                            <div class="js-slide">
                                                <img src={book.BookSampleImage2} alt="Image Description" class="mx-auto img-fluid" />
                                            </div>
                                            <div class="js-slide">
                                                <img src="{{$book->BookSampleImage3}}" alt="Image Description" class="mx-auto img-fluid" />
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                                <div class="col-md-7 pl-0 summary entry-summary border-left">
                                    <div class="space-top-2 px-4 px-xl-7 border-bottom pb-5">
                                        <h1 class="product_title entry-title font-size-7 mb-3">{book.Name}</h1>
                                        <div class="font-size-2 mb-4">
                                            <span class="text-yellow-darker">
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                            </span>
                                            <span class="ml-3">(3,714)</span>
                                            <span class="ml-3 font-weight-medium">By (author)</span>
                                            <span class="ml-2 text-gray-600">{book.AuthorName}</span>
                                        </div>
                                        <p class="price font-size-22 font-weight-medium mb-3">
                                            <span class="woocommerce-Price-amount amount">
                                                <span class="woocommerce-Price-currencySymbol">Taka </span>{book.Price}
                                            </span>
                                            {/* <!-- <span class="woocommerce-Price-amount amount">
                                                <span class="woocommerce-Price-currencySymbol">$</span>59.95
                                            </span> --> */}
                                        </p>
                                        <div class="mb-2 font-size-2">
                                            <span class="font-weight-medium">Book Format:</span>
                                            {/* <!-- <span class="ml-2 text-gray-600">Choose an option</span> --> */}
                                        </div>

                                        <div class="row mx-gutters-2 mb-4">
                                            <div class="col-6 col-md-3 mb-3 mb-md-0">
                                                <div class="">
                                                    <input type="radio" id="typeOfListingRadio1" name="typeOfListingRadio1" class="custom-control-input checkbox-outline__input" />
                                                    <label class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0" for="typeOfListingRadio1">
                                                        <span class="d-block">Hardcover</span>
                                                        <span class="">{book.Price} Taka</span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <!-- <div class="col-6 col-md-3 mb-3 mb-md-0">
                                                <div class="">
                                                    <input type="radio" id="typeOfListingRadio2" name="typeOfListingRadio1" class="custom-control-input checkbox-outline__input" checked />
                                                    <label class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0" for="typeOfListingRadio2">
                                                        <span class="d-block">Paperback</span>
                                                        <span class="">$9.59</span>
                                                    </label>
                                                </div>
                                            </div> --> */}
                                            {/* <!-- <div class="col-6 col-md-3">
                                                <div class="">
                                                    <input type="radio" id="typeOfListingRadio3" name="typeOfListingRadio1" class="custom-control-input checkbox-outline__input" />
                                                    <label class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0" for="typeOfListingRadio3">
                                                        <span class="d-block">Kindle</span>
                                                        <span class="">$9.59</span>
                                                    </label>
                                                </div>
                                            </div> --> */}
                                        </div>

                                        <div class="woocommerce-product-details__short-description font-size-2 mb-5">
                                            <p class="">{book.BookDescription}</p>
                                        </div>
                                        <form class="cart d-md-flex align-items-center" onSubmit={handleAddToCart} method="post" enctype="multipart/form-data">
                                            {/* @csrf */}
                                            <div class="quantity mb-4 mb-md-0 d-flex align-items-center">

                                                <div class="border px-3 width-120">
                                                    <div class="js-quantity">
                                                        <div class="d-flex align-items-center">
                                                            <label class="screen-reader-text sr-only">Quantity</label>
                                                            <a class="js-minus text-dark" href="javascript:;">
                                                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="1px">
                                                                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)" d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z" />
                                                                </svg> */}
                                                            </a>
                                                            <input type="number" class="input-text qty text js-result form-control text-center border-0" step="1" min="1" max="100" name="quantity" defaultValue={quantity} onChange={(e) => { setQuantity(e.target.value) }} title="Qty" />
                                                            <a class="js-plus text-dark" href="javascript:;">
                                                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="10px">
                                                                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)" d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z" />
                                                                </svg> */}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <button type="submit" name="add-to-cart" value="7145" class="btn btn-dark border-0 rounded-0 p-3 min-width-250 ml-md-4 single_add_to_cart_button button alt">Add
                                                to cart</button>
                                        </form>
                                    </div>
                                    <div class="px-4 px-xl-7 py-5 d-flex align-items-center">
                                        <ul class="list-unstyled nav">
                                            <li class="mr-6 mb-4 mb-md-0">
                                                <a href="#" class="h-primary"><i class="flaticon-heart mr-2"></i> Add to
                                                    Wishlist</a>
                                            </li>
                                            <li class="mr-6">
                                                <a href="#" class="h-primary"><i class="flaticon-share mr-2"></i> Share</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="js-scroll-nav mb-10">
                            <div class="woocommerce-tabs wc-tabs-wrapper  2 mx-lg-auto">
                                <div id="Description" class="">
                                    <div class="border-top border-bottom">
                                        <ul class="container tabs wc-tabs nav justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item active">
                                                <a class="nav-link py-4 font-weight-medium active" href="#Description">
                                                    Description
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductDetails">
                                                    Product Details
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductVideos">
                                                    Videos
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductReviews">
                                                    Reviews (0)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="tab-content font-size-2 container">
                                        <div class="row">
                                            <div class="col-xl-8 offset-xl-2">
                                                <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9">

                                                    <p class="mb-0">Publisher: {book.Publisher}</p>
                                                    <p class="mb-0">Publishing Year: {book.PublishingYear} </p>
                                                    <p class="mb-0">Book Condition: {book.BookCondition}</p>
                                                    <p class="mb-4">Language: {book.Language} </p>
                                                    <p class="mb-4">Copies Left: {book.Quantity} </p>
                                                    <p class="mb-4">Shop Name: {book.SellerId} </p>
                                                    <p class="mb-4">Author: {book.AuthorName} </p>
                                                    <p>Genre: {book.CategoryId} </p>
                                                    <p> {book.BookDescription}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id="ProductDetails" class="">
                                    <div class="border-top border-bottom">
                                        <ul class="container tabs wc-tabs nav justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#Description">
                                                    Description
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item active">
                                                <a class="nav-link py-4 font-weight-medium active" href="#ProductDetails">
                                                    Product Details
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductVideos">
                                                    Videos
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductReviews">
                                                    Reviews (0)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="tab-content font-size-2 container">
                                        <div class="row">
                                            <div class="col-xl-8 offset-xl-2">
                                                <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9">

                                                    <div class="table-responsive mb-4">
                                                        <table class="table table-hover table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th class="px-4 px-xl-5">Format: </th>
                                                                    <td class="">Paperback | 384 pages</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="px-4 px-xl-5">Dimensions</th>
                                                                    <td>9126 x 194 x 28mm | 301g</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="px-4 px-xl-5">Publication date: </th>
                                                                    <td>20 Dec 2020</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="px-4 px-xl-5">Publisher:</th>
                                                                    <td>Little, Brown Book Group</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="px-4 px-xl-5">Imprint:</th>
                                                                    <td>Corsair</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="px-4 px-xl-5">Publication City/Country:</th>
                                                                    <td>London, United Kingdom</td>
                                                                </tr>
                                                                <tr>
                                                                    <th class="px-4 px-xl-5">Language:</th>
                                                                    <td>English</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id="ProductVideos" class="">
                                    <div class="border-top border-bottom">
                                        <ul class="container tabs wc-tabs nav justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#Description">
                                                    Description
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductDetails">
                                                    Product Details
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item active">
                                                <a class="nav-link py-4 font-weight-medium active" href="#ProductVideos">
                                                    Videos
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductReviews">
                                                    Reviews (0)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="tab-content font-size-2 container">
                                        <div class="row">
                                            <div class="col-xl-8 offset-xl-2">
                                                <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9">

                                                    <div class="d-flex mb-8 justify-content-center">
                                                        <a href="javascript:;" class="product__video js-fancybox d-block p-4 border position-relative max-width-234" data-src="//www.youtube.com/watch?v=u-0Z0iVBxUY?autoplay=0" data-speed="700">
                                                            <span class="position-absolute-center text-dark font-size-10"><i class="flaticon-multimedia"></i></span>
                                                            <div class="hover-area">
                                                                <img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg" class="img-fluid d-block mx-auto mb-3" alt="image-description" />
                                                                <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-dark">
                                                                    Where The Crawdads Sing Overview</h2>
                                                                <div class="font-size-2 text-gray-700">Solomon</div>
                                                            </div>
                                                            <span class="text-white bg-dark px-3 py-1 position-absolute bottom-0 right-0">1:45</span>
                                                        </a>
                                                        <a href="javascript:;" class="product__video js-fancybox d-block p-4 border position-relative max-width-234" data-src="www.youtube.com/watch?v=F7yO1tYCYxQ?autoplay=0" data-speed="700">
                                                            <span class="position-absolute-center text-dark font-size-10"><i class="flaticon-multimedia"></i></span>
                                                            <div class="hover-area">
                                                                <img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg" class="img-fluid d-block mx-auto mb-3" alt="image-description" />
                                                                <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-dark">
                                                                    Where The Crawdads Sing Overview</h2>
                                                                <div class="font-size-2 text-gray-700">Solomon</div>
                                                            </div>
                                                            <span class="text-white bg-dark px-3 py-1 position-absolute bottom-0 right-0">2:21</span>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id="ProductReviews" class="">
                                    <div class="border-top border-bottom">
                                        <ul class="container tabs wc-tabs nav justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#Description">
                                                    Description
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductDetails">
                                                    Product Details
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                                                <a class="nav-link py-4 font-weight-medium" href="#ProductVideos">
                                                    Videos
                                                </a>
                                            </li>
                                            <li class="flex-shrink-0 flex-md-shrink-1 nav-item active">
                                                <a class="nav-link py-4 font-weight-medium active" href="#ProductReviews">
                                                    Reviews (0)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="tab-content font-size-2 container">
                                        <div class="row">
                                            <div class="col-xl-8 offset-xl-2">
                                                <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9">

                                                    <h4 class="font-size-3">Customer Reviews </h4>
                                                    <div class="row mb-8">
                                                        <div class="col-md-6 mb-6 mb-md-0">
                                                            <div class="d-flex  align-items-center mb-4">
                                                                <span class="font-size-15 font-weight-bold">4.6</span>
                                                                <div class="ml-3 h6 mb-0">
                                                                    <span class="font-weight-normal">3,714 reviews</span>
                                                                    <div class="text-yellow-darker">
                                                                        <small class="fas fa-star"></small>
                                                                        <small class="fas fa-star"></small>
                                                                        <small class="fas fa-star"></small>
                                                                        <small class="fas fa-star"></small>
                                                                        <small class="far fa-star"></small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-md-flex">
                                                                <button type="button" class="btn btn-outline-dark rounded-0 px-5 mb-3 mb-md-0">See
                                                                    all reviews</button>
                                                                <button type="button" class="btn btn-dark ml-md-3 rounded-0 px-5">Write a
                                                                    review</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">

                                                            <ul class="list-unstyled pl-xl-4">
                                                                <li class="py-2">
                                                                    <a class="row align-items-center mx-gutters-2 font-size-2" href="javascript:;">
                                                                        <div class="col-auto">
                                                                            <span class="text-dark">5 stars</span>
                                                                        </div>
                                                                        <div class="col px-0">
                                                                            <div class="progress bg-white-100" style={{ height: "7px" }}>
                                                                                <div class="progress-bar bg-yellow-darker" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-2">
                                                                            <span class="text-secondary">205</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="py-2">
                                                                    <a class="row align-items-center mx-gutters-2 font-size-2" href="javascript:;">
                                                                        <div class="col-auto">
                                                                            <span class="text-dark">4 stars</span>
                                                                        </div>
                                                                        <div class="col px-0">
                                                                            <div class="progress bg-white-100" style={{ height: "7px" }}>
                                                                                <div class="progress-bar bg-yellow-darker" role="progressbar" style={{ width: "53%" }} aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-2">
                                                                            <span class="text-secondary">55</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="py-2">
                                                                    <a class="row align-items-center mx-gutters-2 font-size-2" href="javascript:;">
                                                                        <div class="col-auto">
                                                                            <span class="text-dark">3 stars</span>
                                                                        </div>
                                                                        <div class="col px-0">
                                                                            <div class="progress bg-white-100" style={{ height: "7px" }}>
                                                                                <div class="progress-bar bg-yellow-darker" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-2">
                                                                            <span class="text-secondary">23</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="py-2">
                                                                    <a class="row align-items-center mx-gutters-2 font-size-2" href="javascript:;">
                                                                        <div class="col-auto">
                                                                            <span class="text-dark">2 stars</span>
                                                                        </div>
                                                                        <div class="col px-0">
                                                                            <div class="progress bg-white-100" style={{ height: "7px" }}>
                                                                                <div class="progress-bar bg-yellow-darker" role="progressbar" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-2">
                                                                            <span class="text-secondary">0</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="py-2">
                                                                    <a class="row align-items-center mx-gutters-2 font-size-2" href="javascript:;">
                                                                        <div class="col-auto">
                                                                            <span class="text-dark">1 stars</span>
                                                                        </div>
                                                                        <div class="col px-0">
                                                                            <div class="progress bg-white-100" style={{ height: "7px" }}>
                                                                                <div class="progress-bar bg-yellow-darker" role="progressbar" style={{ width: "1%" }} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-2">
                                                                            <span class="text-secondary">4</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <h4 class="font-size-3 mb-8">1-5 of 44 reviews</h4>
                                                    {/* <ul class="list-unstyled mb-8">
                                                        @foreach($bookAllReviews as $review)
                                                        <li class="mb-4 pb-5 border-bottom">
                                                            <div class="d-flex align-items-center mb-3">
                                                                <h6 class="mb-0">$review.title</h6>
                                                                <div class="text-yellow-darker ml-3">
                                                                    <b class="fas fa-star"> {{ $review-> rating}} </b>
                                                                    <!-- <small class="fas fa-star"></small>
                                                                    <small class="fas fa-star"></small>
                                                                    <small class="fas fa-star"></small>
                                                                    <small class="fas fa-star"></small>
                                                                    <small class="far fa-star"></small> -->
                                                                </div>
                                                            </div>
                                                            <p class="mb-4 text-lh-md">{{ $review-> comment}}</p>
                                                            <div class="text-gray-600 mb-4">{{ $review-> created_at}} </div>
                                                            <ul class="nav">
                                                                <li class="mr-7">
                                                                    <a href="#" class="text-gray-600 d-flex align-items-center">
                                                                        <i class="text-dark font-size-5 flaticon-like-1"></i>
                                                                        <span class="ml-2">90</span>
                                                                    </a>
                                                                </li>
                                                                <li class="mr-7">
                                                                    <a href="#" class="text-gray-600 d-flex align-items-center">
                                                                        <i class="text-dark font-size-5 flaticon-dislike"></i>
                                                                        <span class="ml-2">10</span>
                                                                    </a>
                                                                </li>
                                                                <li class="mr-7">
                                                                    <a href="#" class="text-gray-600 d-flex align-items-center">
                                                                        <i class="text-dark font-size-5 flaticon-flag"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        @endforeach
                                                    </ul> */}
                                                    <h4 class="font-size-3 mb-4">Write a Review</h4>
                                                    <form action="/book/review/{{$book->Id}}" method="post">
                                                        @csrf
                                                        <div class="d-flex align-items-center mb-6">
                                                            <h6 class="mb-0">Select a rating(required)</h6>
                                                            <div class="text-yellow-darker ml-3 font-size-4">
                                                                5*<input checked type="radio" name="rating" value="5" />
                                                                4*<input type="radio" name="rating" value="4" />
                                                                3*<input type="radio" name="rating" value="3" />
                                                                2*<input type="radio" name="rating" value="2" />
                                                                1*<input type="radio" name="rating" value="1" />


                                                                {/* <!-- <small class="far fa-star"></small>
                                                                <small class="far fa-star"></small>
                                                                <small class="far fa-star"></small> --> */}
                                                            </div>
                                                        </div>
                                                        <div class="js-form-message form-group mb-4">
                                                            <label for="descriptionTextarea" class="form-label text-dark h6 mb-3">Details please! Your review
                                                                helps other shoppers.</label>
                                                            <textarea name="comment" class="form-control rounded-0 p-4" rows="7" id="descriptionTextarea" placeholder="What did you like or dislike? What should other shoppers know before buying?" required data-msg="Please enter your message." data-error-class="u-has-error" data-success-class="u-has-success"></textarea>
                                                        </div>
                                                        <div class="form-group mb-5">
                                                            <label for="inputCompanyName" class="form-label text-dark h6 mb-3">Add a
                                                                title</label>
                                                            <input type="text" class="form-control rounded-0 px-4" name="title" id="inputCompanyName" placeholder="Write a title of your comment" aria-label="3000 characters remaining" />
                                                        </div>
                                                        <div class="d-flex">
                                                            <button type="submit" class="btn btn-dark btn-wide rounded-0 transition-3d-hover">Submit
                                                                Review</button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <section class="space-bottom-3">
                            <div class="container">
                                <header class="mb-5 d-md-flex justify-content-between align-items-center">
                                    <h2 class="font-size-7 mb-3 mb-md-0">Customers Also Considered</h2>
                                </header>
                                <div class="js-slick-carousel products no-gutters border-top border-left border-right" data-arrows-classes="u-slick__arrow u-slick__arrow-centered--y" data-arrow-left-classes="fas fa-chevron-left u-slick__arrow-inner u-slick__arrow-inner--left ml-lg-n10" data-arrow-right-classes="fas fa-chevron-right u-slick__arrow-inner u-slick__arrow-inner--right mr-lg-n10" data-slides-show="5" data-responsive='[{
                               "breakpoint": 1500,
                               "settings": {
                                 "slidesToShow": 4
                               }
                            },{
                               "breakpoint": 1199,
                               "settings": {
                                 "slidesToShow": 3
                               }
                            }, {
                               "breakpoint": 992,
                               "settings": {
                                 "slidesToShow": 2
                               }
                            }, {
                               "breakpoint": 554,
                               "settings": {
                                 "slidesToShow": 2
                               }
                            }]'>
                                    <div class="product">
                                        <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                                <div class="woocommerce-loop-product__thumbnail">
                                                    <a href="../shop/single-product-v3.html" class="d-block"><img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg" class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
                                                </div>
                                                <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v3.html">Paperback</a></div>
                                                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                                        <a href="../shop/single-product-v3.html">Think Like a Monk: Train Your
                                                            Mind for Peace and Purpose Everyday</a>
                                                    </h2>
                                                    <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay
                                                        Shetty</a></div>
                                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                        <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                                    </div>
                                                </div>
                                                <div class="product__hover d-flex align-items-center">
                                                    <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                                        <span class="product__add-to-cart">ADD TO CART</span>
                                                        <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-switch"></i>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product">
                                        <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                                <div class="woocommerce-loop-product__thumbnail">
                                                    <a href="../shop/single-product-v3.html" class="d-block"><img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img2.jpg" class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
                                                </div>
                                                <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v3.html">Kindle Edition</a></div>
                                                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                                        <a href="../shop/single-product-v3.html">The Overdue Life of Amy
                                                            Byler</a>
                                                    </h2>
                                                    <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Kelly
                                                        Harms</a></div>
                                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                        <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                                    </div>
                                                </div>
                                                <div class="product__hover d-flex align-items-center">
                                                    <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                                        <span class="product__add-to-cart">ADD TO CART</span>
                                                        <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-switch"></i>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product">
                                        <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                                <div class="woocommerce-loop-product__thumbnail">
                                                    <a href="../shop/single-product-v3.html" class="d-block"><img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg" class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
                                                </div>
                                                <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v3.html">Paperback</a></div>
                                                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                                        <a href="../shop/single-product-v3.html">All You Can Ever Know: A
                                                            Memoir</a>
                                                    </h2>
                                                    <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay
                                                        Shetty</a></div>
                                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                        <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                                    </div>
                                                </div>
                                                <div class="product__hover d-flex align-items-center">
                                                    <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                                        <span class="product__add-to-cart">ADD TO CART</span>
                                                        <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-switch"></i>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product">
                                        <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                                <div class="woocommerce-loop-product__thumbnail">
                                                    <a href="../shop/single-product-v3.html" class="d-block"><img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img4.jpg" class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
                                                </div>
                                                <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v3.html">Kindle Edition</a></div>
                                                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                                        <a href="../shop/single-product-v3.html">The Last Sister (Columbia River
                                                            Book 1)</a>
                                                    </h2>
                                                    <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Kelly
                                                        Harms</a></div>
                                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                        <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                                    </div>
                                                </div>
                                                <div class="product__hover d-flex align-items-center">
                                                    <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                                        <span class="product__add-to-cart">ADD TO CART</span>
                                                        <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-switch"></i>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product">
                                        <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                                <div class="woocommerce-loop-product__thumbnail">
                                                    <a href="../shop/single-product-v3.html" class="d-block"><img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img5.jpg" class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
                                                </div>
                                                <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v3.html">Paperback</a></div>
                                                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                                        <a href="../shop/single-product-v3.html">Think Like a Monk: Train Your
                                                            Mind for Peace and Purpose Everyday</a>
                                                    </h2>
                                                    <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay
                                                        Shetty</a></div>
                                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                        <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                                    </div>
                                                </div>
                                                <div class="product__hover d-flex align-items-center">
                                                    <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                                        <span class="product__add-to-cart">ADD TO CART</span>
                                                        <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-switch"></i>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product">
                                        <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                                <div class="woocommerce-loop-product__thumbnail">
                                                    <a href="../shop/single-product-v3.html" class="d-block"><img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img6.jpg" class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
                                                </div>
                                                <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v3.html">Kindle Edition</a></div>
                                                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                                        <a href="../shop/single-product-v3.html">The Overdue Life of Amy
                                                            Byler</a>
                                                    </h2>
                                                    <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Kelly
                                                        Harms</a></div>
                                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                        <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                                    </div>
                                                </div>
                                                <div class="product__hover d-flex align-items-center">
                                                    <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                                        <span class="product__add-to-cart">ADD TO CART</span>
                                                        <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-switch"></i>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product">
                                        <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                                <div class="woocommerce-loop-product__thumbnail">
                                                    <a href="../shop/single-product-v3.html" class="d-block"><img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img7.jpg" class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
                                                </div>
                                                <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v3.html">Paperback</a></div>
                                                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                                        <a href="../shop/single-product-v3.html">All You Can Ever Know: A
                                                            Memoir</a>
                                                    </h2>
                                                    <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Jay
                                                        Shetty</a></div>
                                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                        <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                                    </div>
                                                </div>
                                                <div class="product__hover d-flex align-items-center">
                                                    <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                                        <span class="product__add-to-cart">ADD TO CART</span>
                                                        <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-switch"></i>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product">
                                        <div class="product__inner overflow-hidden p-3 p-md-4d875">
                                            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                                                <div class="woocommerce-loop-product__thumbnail">
                                                    <a href="../shop/single-product-v3.html" class="d-block"><img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img8.jpg" class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
                                                </div>
                                                <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                                                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v3.html">Kindle Edition</a></div>
                                                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                                                        <a href="../shop/single-product-v3.html">The Last Sister (Columbia River
                                                            Book 1)</a>
                                                    </h2>
                                                    <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">Kelly
                                                        Harms</a></div>
                                                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                                        <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29</span>
                                                    </div>
                                                </div>
                                                <div class="product__hover d-flex align-items-center">
                                                    <a href="../shop/single-product-v3.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto">
                                                        <span class="product__add-to-cart">ADD TO CART</span>
                                                        <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-switch"></i>
                                                    </a>
                                                    <a href="../shop/single-product-v3.html" class="h-p-bg btn btn-outline-primary border-0">
                                                        <i class="flaticon-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default withRouter(SingleBook);
