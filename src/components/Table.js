import React from 'react'

const Table = ({ data, loading }) => {
    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Total Amount</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    loading && <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    data?.map((el) => {
                        return <>
                            <tr>
                                <th scope="row">{el.id}</th>
                                <td>{el.order_id}</td>
                                <td>{el.costumer_id}</td>
                                <td>{el.order_date}</td>
                                <td>{el.total_amount}</td>
                                <td>{el.customer_name}</td>
                                <td>{el.contact_number}</td>
                                <td>{el.email}</td>
                                <td>{el.amount}</td>
                            </tr>

                        </>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table