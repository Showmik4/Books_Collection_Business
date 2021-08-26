import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../Common_Compo/NavBar';


export default function OrderList() {

    const [orderList, setOrderList] = useState()

    useEffect(async () => {
        // GET request using axios inside useEffect React hook
        let result = await axios.get('http://localhost:8000/api/user/myaccount/orders?userid=' + localStorage.getItem('userid'))
            .then(response => {
                setOrderList(response.data);
                console.log(orderList);
            });

    }, []);
    if (!orderList) {
        return <>
            loading....
        </>
    }
    return (
        <>
            <NavBar />
            <div className="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-2 mb-lg-4">
                <h6 className="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">My Order History</h6>

                <table className="table">
                    <thead>
                        <tr className="border">
                            <th scope="col" className="py-3 border-bottom-0 font-weight-medium pl-3 pl-lg-5">#Order Id</th>
                            <th scope="col" className="py-3 border-bottom-0 font-weight-medium">Date</th>
                            <th scope="col" className="py-3 border-bottom-0 font-weight-medium"> Payment Staus</th>
                            <th scope="col" className="py-3 border-bottom-0 font-weight-medium">Total (Taka)</th>
                            <th scope="col" className="py-3 border-bottom-0 font-weight-medium">Actions</th>
                        </tr>
                    </thead>
                    {orderList.map((order) =>
                        <tbody key={order.order_id}><tr className="border">
                            <th className="pl-3 pl-md-5 font-weight-normal align-middle py-6">{order.order_id}</th>
                            <td className="align-middle py-5">{order.order_created}</td>
                            <td className="align-middle py-5">Completed</td>
                            <td className="align-middle py-5">
                                <span className="text-primary">{order.amount}</span> for all items
                            </td>
                            <td className="align-middle py-5">
                                <div className="d-flex justify-content-center">
                                    <Link to={`/my/orderid/${order.order_id}`} className="btn btn-dark rounded-0 btn-wide font-weight-medium">Details</Link>
                                </div>
                            </td>
                        </tr></tbody>
                    )}
                </table>

            </div>

        </>
    )
}
