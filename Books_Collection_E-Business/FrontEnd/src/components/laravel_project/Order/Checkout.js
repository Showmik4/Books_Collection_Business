import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function Checkout() {

    const [allAddress, setAllAddress] = useState([])
    const [paymentMethod, setPaymentMethod] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [mobileBankName, setMobileBankName] = useState("")
    const [cardNumber, setCardNumber] = useState("")

    const [addressId, setAddressId] = useState()

    const history = useHistory()


    useEffect(async () => {
        let result = await fetch('http://localhost:8000/api/user/myaccount/address?userid=1');
        result = await result.json()
        console.clear()
        console.log(result)
        setAllAddress(result)

    }, [])

    const handlePayamentMethod = (e) => {
        let method = e.target.value;
        setPaymentMethod(method);
    }


    const handleCheckout = async (e) => {
        e.preventDefault()
        console.log(addressId);
        console.log(mobileBankName);

        if ("valid" == "valid") {
            let result = await fetch("http://localhost:8000/api/order/checkout/", {
                method: 'POST',
                body: JSON.stringify({
                    userid: 1,
                    address: addressId,
                    payment_method: paymentMethod,
                    which_mobile_bank: mobileBankName,
                    mobile_bank_number: mobileNumber,
                    Card_Number: cardNumber
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then(response => response.json())
                .then(response => {
                    if (response == 1) {
                        history.push("/my/order/list")
                    }
                })
            //history.push("/cart/list")
            //console.log(result);
        }
    }

    return (
        <div id="content" class="site-content bg-punch-light space-bottom-3">
            <div class="col-full container">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main">
                        <article id="post-6" class="post-6 page type-page status-publish hentry">
                            <header class="entry-header space-top-2 space-bottom-1 mb-2">
                                <h4 class="entry-title font-size-7 text-center">Checkout</h4>
                            </header>

                            <div class="entry-content">
                                <div class="woocommerce">


                                    <form onSubmit={handleCheckout} name="checkout" method="post" class="checkout woocommerce-checkout row mt-8" enctype="multipart/form-data" novalidate="novalidate">

                                        <div class="col2-set col-md-6 col-lg-7 col-xl-8 mb-6 mb-md-0" id="customer_details">
                                            <div class="px-4 pt-5 bg-white border">
                                                <div class="woocommerce-billing-fields">
                                                    <h3 class="mb-4 font-size-3">Select Address</h3>
                                                    <div class="woocommerce-billing-fields__field-wrapper row">

                                                        {allAddress.map((address) => (
                                                            <div>
                                                                <p class="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field" data-priority="10" >
                                                                    <div class="col">
                                                                        <div class="mb-6 mb-md-0">
                                                                            <h6 class="font-weight-medium font-size-22 mb-3">Shipping Address
                                                                            </h6>
                                                                            <address class="d-flex flex-column mb-4">
                                                                                <span class="text-gray-600 font-size-2">House No: {address.House_No}</span>
                                                                                <span class="text-gray-600 font-size-2">Road No: {address.Road_No}</span>
                                                                                <span class="text-gray-600 font-size-2">Area: {address.Area}</span>
                                                                                <span class="text-gray-600 font-size-2">{address.City}, {address.Postal_Code}</span>
                                                                                <span class="text-gray-600 font-size-2">{address.Country}</span>
                                                                                <span class="text-gray-600 font-size-2">Mobile Number: {address.Mobile_Number}</span>
                                                                            </address>
                                                                        </div>
                                                                    </div>
                                                                    <label for="billing_first_name" class="form-label">Address:
                                                                        <abbr class="required" title="required">*</abbr></label>
                                                                    <input type="radio" class="input-text form-control" onChange={(e) => { setAddressId(address.address_id) }} name="address" placeholder="" value={addressId} autocomplete="given-name" autofocus="autofocus" />
                                                                </p>
                                                            </div>
                                                        ))}


                                                        <p class="col-12 mb-3 form-row form-row-wide address-field validate-required" id="billing_address_1_field" data-priority="50">
                                                            <label for="billing_address_1" class="form-label">Payment Method
                                                                <abbr class="required" title="required">*</abbr></label>
                                                            <select onChange={handlePayamentMethod} name="payment_method" id="payment_method" class="form-control country_to_state country_select  select2-hidden-accessible" autocomplete="country" tabindex="-1" aria-hidden="true">
                                                                <option value="">Select a Payment Method</option>
                                                                <option value="Card">Card</option>
                                                                <option value="Mobile Banking">Mobile Banking</option>
                                                            </select>
                                                        </p>

                                                        {paymentMethod == "Card" ?
                                                            <div id="card_payment_details" class="d-none-3">

                                                                <p class="col-12 mb-4d75 form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                                    <label for="billing_company" class="form-label">Card Number</label>
                                                                    <input onChange={(e) => { setCardNumber(e.target.value) }} value={cardNumber} type="text" class="input-text form-control" name="Card_Number" id="billing_company" placeholder="" autocomplete="organization" />
                                                                </p>
                                                                <p class="col-12 mb-4d75 form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                                    <label for="billing_company" class="form-label">MM/YY</label>
                                                                    <input type="text" class="input-text form-control" name="MM/YY" id="billing_company" placeholder="Example 11/2022" autocomplete="organization" />
                                                                </p>
                                                                <p class="col-12 mb-4d75 form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                                    <label for="billing_company" class="form-label">CVC/CVV</label>
                                                                    <input type="text" class="input-text form-control" name="CVC/CVV" id="billing_company" placeholder="" autocomplete="organization" />
                                                                </p>
                                                                <p class="col-12 mb-4d75 form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                                    <label for="billing_company" class="form-label">Card_Holder_Name</label>
                                                                    <input type="text" class="input-text form-control" name="Card_Holder_Name" id="billing_company" placeholder="" autocomplete="organization" />
                                                                </p>
                                                                <p class="col-12 mb-4d75 form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                                    <label for="billing_company" class="form-label">PIN (info will not be saved)</label>
                                                                    <input type="password" class="input-text form-control" name="Card_PIN" id="billing_company" placeholder="" autocomplete="organization" />
                                                                </p>

                                                            </div>
                                                            : ""}

                                                        {paymentMethod == "Mobile Banking" ?
                                                            <div id="mobile_banking_details" class="d-none-2">
                                                                <p class="col-12 mb-3 form-row form-row-wide address-field validate-required" id="billing_address_1_field" data-priority="50">
                                                                    <label for="billing_address_1" class="form-label">Mobile Bank Name
                                                                        <abbr class="required" title="required">*</abbr></label>
                                                                    <select onChange={(e) => { setMobileBankName(e.target.value) }} name="which_mobile_bank" id="which_mobile_bank" class="form-control country_to_state country_select  select2-hidden-accessible" autocomplete="country" tabindex="-1" aria-hidden="true">
                                                                        <option value="">Select a Mobile Bank</option>
                                                                        <option value="Bkash">Bkash</option>
                                                                        <option value="Rocket">Rocket</option>
                                                                        <option value="Nagad">Nagad</option>
                                                                    </select>
                                                                </p>
                                                                <p class="col-12 mb-4d75 form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                                    <label for="billing_company" class="form-label">Mobile Number</label>
                                                                    <input onChange={(e) => { setMobileNumber(e.target.value) }} type="number" class="input-text form-control" name="mobile_bank_number" id="" placeholder="" autocomplete="mobile number" />
                                                                </p>
                                                                <p class="col-12 mb-4d75 form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                                    <label for="billing_company" class="form-label">PIN (info will not be saved)</label>
                                                                    <input type="password" class="input-text form-control" name="Mobile_Banking_PIN" id="" placeholder="" />
                                                                </p>
                                                            </div>
                                                            : ""}

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-4 pt-5 bg-white border border-top-0 mt-n-one">
                                                <div class="woocommerce-additional-fields">
                                                    <h3 class="mb-4 font-size-3">Additional information</h3>
                                                    <div class="woocommerce-additional-fields__field-wrapper">
                                                        <p class="col-12 mb-4d75 px-0 form-row notes" id="order_comments_field" data-priority="">
                                                            <label for="order_comments" class="form-label">Order notes
                                                                (optional)</label>
                                                            <textarea name="order_comments" class="input-text form-control" id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="8" cols="5"></textarea>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 id="order_review_heading" class="d-none">Your order</h3>
                                        <div id="order_review" class="col-md-6 col-lg-5 col-xl-4 woocommerce-checkout-review-order">
                                            <div id="checkoutAccordion" class="border border-gray-900 bg-white mb-5">

                                                <div class="p-4d875 border">
                                                    <div id="checkoutHeadingOne" class="checkout-head">
                                                        <a href="#" class="text-dark d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#checkoutCollapseOne" aria-expanded="true" aria-controls="checkoutCollapseOne">
                                                            <h3 class="checkout-title mb-0 font-weight-medium font-size-3">
                                                                Cart Totals</h3>

                                                        </a>
                                                    </div>
                                                    <div id="checkoutCollapseOne" class="mt-4 checkout-content collapse show" aria-labelledby="checkoutHeadingOne" data-parent="#checkoutAccordion">
                                                        <table class="shop_table shop_table_responsive">
                                                            <tbody>
                                                                <tr class="checkout-subtotal">
                                                                    <th>Subtotal</th>
                                                                    <td data-title="Subtotal">
                                                                        {/* <span class="woocommerce-Price-amount amount">
                                                                            <span class="woocommerce-Price-currencySymbol">Taka</span> {{ $totalAmountToPay }}
                                                                        </span> */}
                                                                    </td>
                                                                </tr>
                                                                <tr class="order-shipping">
                                                                    <th>Shipping</th>
                                                                    <td data-title="Shipping">Free Shipping</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="form-row place-order">
                                                <input type="submit" class="button alt btn btn-dark btn-block rounded-0 py-4" value="Place order" />
                                                <input type="hidden" id="_wpnonce" name="_wpnonce" value="926470d564" /><input type="hidden" name="_wp_http_referer" value="/storefront/?wc-ajax=update_order_review" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </article>

                    </main>

                </div>

            </div>

        </div >
    )
}
