import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Common_Compo/NavBar';

export default function WishList() {

    const [dataAll, setDataAll] = useState()
    const [wishList, setWishList] = useState()

    const [book1, setBook1] = useState()
    const [book2, setBook2] = useState()
    const [book3, setBook3] = useState()

    const history = useHistory()


    const handleDelete = async (e) => {
        console.log("book id: " + e.target.value);
        let data = await fetch('http://localhost:8000/api/remove/wishlist/' + e.target.value + '?userid=' + localStorage.getItem("userid"));
        data = await data.json()
        //history.push("/user/wish/list")

        if (parseInt(data) == 1) {
            let data = await fetch('http://localhost:8000/api/user/wishlist?userid=' + 1

            );
            data = await data.json()
            console.clear()
            console.log(data)
            setDataAll(data);
            setWishList(data.wishlist)
            if (data.books) {
                setBook1(data.books.book1)
                setBook2(data.books.book2)
                setBook3(data.books.book3)
            }
            console.log(book2);
        }
    }

    useEffect(async () => {

        let data = await fetch('http://localhost:8000/api/user/wishlist?userid=' + 1

        );
        data = await data.json()
        console.clear()
        console.log(data)
        setDataAll(data);
        setWishList(data.wishlist)
        if (data.books) {
            setBook1(data.books.book1)
            setBook2(data.books.book2)
            setBook3(data.books.book3)
        }
        console.log(book2);

        //data[]

    }, [])




    if (!wishList) {
        return "data is loading.."
    } else if (!dataAll.books.book1 && !dataAll.books.book2 && !dataAll.books.book3) {
        return <>
            <NavBar />
            <h2>No Book in WishList</h2>
        </>
    } else {
        return (
            <>
                <NavBar />
                <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-3">
                    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">Wishlist</h6>
                    {/* @if($wishlist)
    @if($wishlist->bookid1 == "" and $wishlist->bookid2 == "" and $wishlist->bookid3 == "")
            <h2>No Book in WishList</h2>
            @else */}
                    <table class="table mb-0">
                        <thead>

                            <tr class="border">
                                <th scope="col" class="py-3 border-bottom-0 font-weight-medium pl-3 pl-md-5">Prouct</th>
                                <th scope="col" class="py-3 border-bottom-0 font-weight-medium">Price</th>
                                <th scope="col" class="py-3 border-bottom-0 font-weight-medium">Stock Staus
                                </th>
                                <th scope="col" class="py-3 border-bottom-0 font-weight-medium">Actions</th>
                                <th scope="col" class="py-3 border-bottom-0 font-weight-medium">Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {book1 ? (
                                <tr class="border">
                                    <th class="pl-3 pl-md-5 font-weight-normal align-middle py-6">
                                        <div class="d-flex align-items-center">
                                            <a class="d-block" href="#">
                                                <img class="img-fluid" src={book1.BookSampleImage1} width="100px" height="120px" alt="Image-Description" />
                                            </a>
                                            <div class="ml-xl-4">
                                                <div class="font-weight-normal">
                                                    <a href="#">{book1.Name}</a>
                                                </div>
                                                <div class="font-size-2"><a href="#" class="text-gray-700" tabindex="0">{book1.AuthorName}</a></div>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="align-middle py-5">{book1.Price}</td>
                                    <td class="align-middle py-5">In Stock</td>
                                    <td class="align-middle py-5">
                                        <span class="product__add-to-cart">ADD TO CART</span>
                                    </td>
                                    <td class="align-middle py-5">
                                        <button class="product__add-to-cart" value={book1.Id} onClick={handleDelete}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ) : ""}
                            {book2 ? (
                                <tr class="border">
                                    <th class="pl-3 pl-md-5 font-weight-normal align-middle py-6">
                                        <div class="d-flex align-items-center">
                                            <a class="d-block" href="#">
                                                <img class="img-fluid" src={book2.BookSampleImage1} width="100px" height="120px" alt="Image-Description" />
                                            </a>
                                            <div class="ml-xl-4">
                                                <div class="font-weight-normal">
                                                    <a href="#">{book2.Name}</a>
                                                </div>
                                                <div class="font-size-2"><a href="#" class="text-gray-700" tabindex="0">{book2.AuthorName}</a></div>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="align-middle py-5">{book2.Price}</td>
                                    <td class="align-middle py-5">In Stock</td>
                                    <td class="align-middle py-5">
                                        <span class="product__add-to-cart">ADD TO CART</span>
                                    </td>
                                    <td class="align-middle py-5">
                                        <button class="product__add-to-cart" value={book2.Id} onClick={handleDelete}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ) : ""}

                            {book3 ? (
                                <tr class="border">
                                    <th class="pl-3 pl-md-5 font-weight-normal align-middle py-6">
                                        <div class="d-flex align-items-center">
                                            <a class="d-block" href="#">
                                                <img class="img-fluid" width="100px" height="120px" src={book3.BookSampleImage1} alt="Image-Description" />
                                            </a>
                                            <div class="ml-xl-4">
                                                <div class="font-weight-normal">
                                                    <a href="#">{book3.Name}</a>
                                                </div>
                                                <div class="font-size-2"><a href="#" class="text-gray-700" tabindex="0">{book3.AuthorName}</a></div>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="align-middle py-5">{book3.Price}</td>
                                    <td class="align-middle py-5">In Stock</td>
                                    <td class="align-middle py-5">
                                        <span class="product__add-to-cart">ADD TO CART</span>
                                    </td>
                                    <td class="align-middle py-5">
                                        <button class="product__add-to-cart" value={book3.Id} onClick={handleDelete}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ) : ""}

                        </tbody>
                    </table>
                    {/* @endif */}
                    {/* @else */}
                    {/* <h2>No Book in WishList</h2> */}
                    {/* @endif */}
                </div>
            </>
        )
    }
}
