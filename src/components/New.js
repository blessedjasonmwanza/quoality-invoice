import React, { useState } from 'react'
import '../assets/css/NewInvoice.css';

export default function New() {
  const [invoice, setInvoice] = useState({})
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [item, setInvoiceItem] = useState({
    name: '',
    description: '',
    quantity: 1,
    unit_price: 0.00,
    unit_tax_rate: 0.00,
    discount: 0.00,
    total: 0,
  });

  const addItem = (e) => {
    e.preventDefault();
    const {unit_price, quantity, unit_tax_rate} = item;
    const total = (unit_price * quantity) - ((unit_tax_rate /100) * (unit_price * quantity));
    const newItem = {...item,total: total};
    setInvoiceItems([...invoiceItems, newItem]);
    e.target.reset();
    localStorage.setItem('invoiceItems', JSON.stringify(invoiceItems));
  }
  const removeItem = (index) => {
    const newItems = invoiceItems.filter((item, i) => i !== index);
    setInvoiceItems(newItems);
    localStorage.setItem('invoiceItems', JSON.stringify(newItems));
  }
  return (
    <>
      <span className='display-title'>Create Invoice</span>
      <div className='card-hovered'>
        <form className='new-item-form' onSubmit={(e) => addItem(e)}>
          <label>
            Product name:
            <input type='text' onInput={(e) => setInvoiceItem({...item, name:e.target.value})} placeholder='Enter Product name' required />
          </label>
          <label>
            Description
            <textarea placeholder='Type Description' onInput={(e) => setInvoiceItem({...item, description:e.target.value})}></textarea>
          </label>
          <label>
            Quantity
            <input type='number' placeholder='Total items' step="1" required onInput={(e) => setInvoiceItem({...item, quantity:e.target.value})} />
          </label>
          <label>
            unit price
            <input type='number' placeholder='cost per item' step="0.01" required onInput={(e) => setInvoiceItem({...item, unit_price:e.target.value})} />
          </label>
          <label>
            Unit tax rate
            <input type='number' placeholder='Tax % per item' max="100" onInput={(e) => setInvoiceItem({...item, unit_tax_rate:e.target.value})} />
          </label>
          <label>
            Discount amount
            <input type='number' placeholder='cost per item' step="0.01" onInput={(e) => setInvoiceItem({...item, discount:e.target.value})} />
          </label>
          <label>
            <br />
            <button className='btn'>Add Item</button>
          </label>
        </form>
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
            {
              invoiceItems.map((invoice, i) => 
                (<tr key={i}>
                  <td>{invoice.name}</td>
                  <td>{invoice.description}</td>
                  <td>{invoice.quantity}</td>
                  <td>{invoice.unit_price}</td>
                  <td>{invoice.unit_tax_rate}</td>
                  <td>{invoice.discount}</td>
                  <td>{(invoice.total).toFixed(2)}</td>
                  <td>
                    <button className='btn' onClick={() => removeItem(i)}>Remove</button>
                  </td>
                </tr>)
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
