import React from 'react'
import '../assets/css/NewInvoice.css';

export default function New() {
  return (
    <>
      <span className='display-title'>Create Invoice</span>
      <div className='card-hovered'>
        <hr />
        <table className='new-invoice-table'>
          <thead>
            <tr>
              <th>Product Item</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit price</th>
              <th>Tax percentage</th>
              <th>Discount</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Item</td>
              <td>Description</td>
              <td>Quantity</td>
              <td>Unit price</td>
              <td>Tax percentage</td>
              <td>Discount</td>
              <td>Total</td>
              <td>
                <button className='btn'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Product Item</td>
              <td>Description</td>
              <td>Quantity</td>
              <td>Unit price</td>
              <td>Tax percentage</td>
              <td>Discount</td>
              <td>Total</td>
              <td>
                <button className='btn'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Product Item</td>
              <td>Description</td>
              <td>Quantity</td>
              <td>Unit price</td>
              <td>Tax percentage</td>
              <td>Discount</td>
              <td>Total</td>
              <td>
                <button className='btn'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
