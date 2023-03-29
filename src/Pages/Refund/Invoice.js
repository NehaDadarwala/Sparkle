import React, { useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './invoice.css';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton';
import { useEffect, useState, useRef } from "react";
import axios from 'axios';

function pad2(n) {
    return n < 10 ? '0' + n : n
}

const generateBillNumber = () => {
    var date = new Date();
    var billnumber = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
    return "R" + billnumber
}


const Invoice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dataFetch = useRef(false)


    const [invoiceID, setInvoiceID] = useState([]);
    const [rows, setRows] = useState([]);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    const [paymentMode, setPaymentMode] = useState('Credit Card');

    const logout = () => {
        console.log("logout clicked")
        navigate('/logout');
    };


    const insertRefundInvoice = useCallback(async () => {
        let todaysDate = new Date()
        let data = JSON.stringify({
            "_id": invoiceID,
            "customerName": location.state.customerName,
            "orderDate": todaysDate.toISOString().split('T')[0],
            "products": rows,
            "paymentDetails": {
                "paymentMode": paymentMode,
                "accountHolder": location.state.cardDetails[0],
                "accountNumber": location.state.cardDetails[1]
            }
        })

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://sparkle-api.onrender.com/refund/newRefund',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        try {
            var response = await axios(config);
            console.log(JSON.stringify(response.data));
        } catch (error) {
            console.log(JSON.stringify(error.message));
        }
    }, [invoiceID, location.state.cardDetails, location.state.customerName, paymentMode, rows])

    useEffect(() => {
        if (location.state.row.length > 2) {
            setTax(Math.round(location.state.row.slice(-2)[0].price * 100) / 100)
            setTotal(Math.round(location.state.row.slice(-1)[0].price * 100) / 100)
        }
        setPaymentMode(location.state.payment);
        setRows(location.state.row);
        setInvoiceID(generateBillNumber);
    }, [location.state]);

    useEffect(() => {
        if (dataFetch.current)
            return
        dataFetch.current = true

        insertRefundInvoice();
    }, [insertRefundInvoice]);

    return (
        <div className="App container mt-5">
            <CustomButton label="New Bill" type="submit" onclickFunction={logout}></CustomButton>
            <div id="divToPrint" className="m-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="d-flex flex-row p-2">
                                <div className="d-flex flex-column"> <span className="font-weight-bold">Tax Invoice</span> <small>{invoiceID}</small> </div>

                            </div>

                            <hr />
                            <div className="table-responsive p-2">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr className="add">
                                            <td>To</td>
                                            <td>From</td>
                                        </tr>
                                        <tr className="content">
                                            <td className="font-weight-bold">{location.state.customerName}</td>
                                            <td className="font-weight-bold">Sparkle <br /> Attn: Suspendisse sapien nunc.<br /> Canada</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div className="products p-2">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr className="add">
                                            <td>Description</td>
                                            <td className="text-center">Price</td>
                                        </tr>
                                        {rows.slice(0, rows.length - 2).map((row, index) => {
                                            return (
                                                <tr key={index} className="content">
                                                    <td>{row.productName}</td>
                                                    <td className="text-center">{row.price}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div className="products p-2">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr className="add">
                                            <td></td>
                                            <td>Subtotal</td>
                                            <td>GST(10%)</td>
                                            <td className="text-center">Total</td>
                                        </tr>
                                        <tr className="content">
                                            <td></td>
                                            <td>{total - tax}</td>
                                            <td>{tax}</td>
                                            <td className="text-center">{total}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div className="address p-2">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr className="add">
                                            <td>Payment Details</td>
                                        </tr>
                                        <tr className="content">
                                            <td> Payment Mode : {paymentMode} <br /> Account Holder : {location.state.cardDetails[0]} <br /> Account Number : {location.state.cardDetails[1]}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Invoice;