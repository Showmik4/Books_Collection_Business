import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../Common_Compo/NavBar';

function OrderById(props) {

    const [orderDetails, setOrderDetails] = useState([])
    const [orderItems, setOrderItems] = useState([])

    //let id = props.match.params.id;
    useEffect(async () => {
        // GET request using axios inside useEffect React hook
        let result = await axios.get('http://localhost:8000/api/user/order/' + props.match.params.id + '?userid=' + localStorage.getItem('userid'))
            .then(response => {
                setOrderDetails(response.data.orderDetails);
                setOrderItems(response.data.orderItems);
                console.log(response.data.orderDetails);
            });

    }, []);

    if (!orderDetails || !orderItems) { return <>loading...</> }
    return (
        <>
            <NavBar />
            <main id="content">
                <div className="bg-gray-200 space-bottom-3">
                    <div className="container">
                        <div className="py-5 py-lg-7">
                            <h6 className="font-weight-medium font-size-7 text-center mt-lg-1">Order Received</h6>
                        </div>
                        <div className="max-width-890 mx-auto">
                            <div className="bg-white pt-6 border">
                                <h6 className="font-size-3 font-weight-medium text-center mb-4 pb-xl-1">Thank you. Your order has
                                    been received.</h6>
                                <div className="border-bottom mb-5 pb-5 overflow-auto overflow-md-visible">
                                    <div className="pl-3">
                                        <table className="table table-borderless mb-0 ml-1">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="font-size-2 font-weight-normal py-0">Order number:
                                                    </th>
                                                    <th scope="col" className="font-size-2 font-weight-normal py-0">Date:</th>
                                                    <th scope="col" className="font-size-2 font-weight-normal py-0 text-md-center">
                                                        Total: </th>
                                                    <th scope="col" className="font-size-2 font-weight-normal py-0 text-md-right pr-md-9">
                                                        Payment method:</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <th scope="row" className="pr-0 py-0 font-weight-medium">{orderDetails.order_id}</th>
                                                    <td className="pr-0 py-0 font-weight-medium">{orderDetails.order_created}</td>
                                                    <td className="pr-0 py-0 font-weight-medium text-md-center">Taka {orderDetails.amount}</td>
                                                    <td className="pr-md-4 py-0 font-weight-medium text-md-right">{orderDetails.payment_method}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="border-bottom mb-5 pb-6">
                                    <div className="px-3 px-md-4">
                                        <div className="ml-md-2">
                                            <h6 className="font-size-3 on-weight-medium mb-4 pb-1">Order Details</h6>

                                            {orderItems.map((book) =>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <div className="d-flex align-items-baseline">
                                                        <div>
                                                            <h6 className="font-size-2 font-weight-normal mb-1">{book.Name} <br />
                                                                {book.AuthorName}
                                                            </h6>
                                                            <span className="font-size-2 text-gray-600">(Paperback, {book.Language})</span>
                                                        </div>
                                                        <span className="font-size-2 ml-4 ml-md-8">x{book.Quantity}</span>
                                                    </div>
                                                    <span className="font-weight-medium font-size-2">Taka {book.Price}</span>
                                                </div>
                                            )}
                                                </div>
                                            
                                        </div>
                                    </div>
                                    <div className="border-bottom mb-5 pb-5">
                                        <ul className="list-unstyled px-3 pl-md-5 pr-md-4 mb-0">
                                            <li className="d-flex justify-content-between py-2">
                                                <span className="font-weight-medium font-size-2">Subtotal:</span>
                                                <span className="font-weight-medium font-size-2">Taka {orderDetails.amount}</span>
                                            </li>
                                            <li className="d-flex justify-content-between py-2">
                                                <span className="font-weight-medium font-size-2">Shipping:</span>
                                                <span className="font-weight-medium font-size-2">Free Shipping</span>
                                            </li>
                                            <li className="d-flex justify-content-between pt-2">
                                                <span className="font-weight-medium font-size-2">Payment Method:</span>
                                                <span className="font-weight-medium font-size-2">{orderDetails.payment_method}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="border-bottom mb-5 pb-4">
                                        <div className="px-3 pl-md-5 pr-md-4">
                                            <div className="d-flex justify-content-between">
                                                <span className="font-size-2 font-weight-medium">Total</span>
                                                <span className="font-weight-medium fon-size-2">Taka {orderDetails.amount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 pl-md-5 pr-md-4 mb-6 pb-xl-1">
                                        <div className="row row-cols-1 row-cols-md-2">
                                            <div className="col">
                                                <h6 className="font-weight-medium font-size-22 mb-3">Shipping Address
                                                </h6>
                                                <address className="d-flex flex-column mb-0">
                                                    {/* <span className="text-gray-600 font-size-2">{'{'}{'{'}Session('userFullName') }</span> */}
                                                    <span className="text-gray-600 font-size-2">House No: {orderDetails.House_No }</span>
                                                    <span className="text-gray-600 font-size-2">Road No: {orderDetails.Road_No }</span>
                                                    <span className="text-gray-600 font-size-2">{orderDetails.Area }, {orderDetails.City}, {orderDetails.Postal_Code}</span>
                                                    <span className="text-gray-600 font-size-2">{orderDetails.Country }</span>
                                                    <span className="text-gray-600 font-size-2">Mobile: {orderDetails.Mobile_Number }</span>
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>

        </>
            )
}
            export default withRouter(OrderById)