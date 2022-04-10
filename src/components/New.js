import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/NewInvoice.css';
import '../assets/css/Table.css';

export default function New() {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices);

  const [invoice, setInvoice] = useState({
    company_name: 'Company A',
    notes: '',
    currency: 'USD',
    paid: false,
    subtotal: 0.00,
    total_tax: 0.00,
    total_excl_tax: 0.00,
    total_discount: 0.00,
    invoice_items: [],
  });
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [item, setInvoiceItem] = useState({
    name: '',
    description: '',
    quantity: 1,
    unit_price: 0.00,
    unit_tax_rate: 0.00,
    unit_tax_amount: 0.00,
    discount: 0.00,
    total: 0,
  });

  useEffect(() => {
    const savedInvoice = JSON.parse(localStorage.getItem('draftInvoice'));
    if (savedInvoice) {
      setInvoice(() => savedInvoice)
      setInvoiceItems(savedInvoice.invoice_items)
    }
  }, []);

  const [currency, setCurrency] = useState(invoice.currency);
  const numberFormat = (num) => num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  const total_excl_tax = () => invoiceItems.reduce((acc, item) => acc + (item.total - item.unit_tax_amount), 0);
  const subtotal = () => invoiceItems.reduce((acc, item) => acc + item.total, 0);
  const total_tax = () => invoiceItems.reduce((acc, item) => acc + item.unit_tax_amount, 0);
  const total_discount = () => invoiceItems.reduce((acc, item) => acc + item.discount, 0);


  const addItem = (e) => {
    e.preventDefault();
    const { unit_price, quantity, unit_tax_rate, discount } = item;
    const total = ((unit_price * quantity) + ((unit_tax_rate / 100) * (unit_price * quantity))) - discount;
    const tax_total = (unit_tax_rate / 100) * (unit_price * quantity);
    const items = [...invoiceItems, { ...item, total: total, unit_tax_amount: tax_total }];
    setInvoiceItems(() => (items));
    const updatedInvoice = {
      ...invoice,
      invoice_items: items,
      total_excl_tax: total_excl_tax(),
      subtotal: subtotal(),
      total_tax: total_tax(),
      total_discount: total_discount()
    };
    setInvoice(updatedInvoice);
    localStorage.setItem('draftInvoice', JSON.stringify(updatedInvoice));
    e.target.reset();
  };

  const removeItem = (index) => {
    const newItems = invoiceItems.filter((item, i) => i !== index);
    setInvoiceItems(newItems);
    const updatedInvoice = {
      ...invoice,
      invoice_items: newItems,
      total_excl_tax: total_excl_tax(),
      subtotal: subtotal(),
      total_tax: total_tax(),
      total_discount: total_discount(),
    };
    setInvoice(() => (updatedInvoice));
    localStorage.setItem('draftInvoice', JSON.stringify(updatedInvoice));
  };

  const updateNote = (note) => {
    const updatedInvoice = { ...invoice, notes: note };
    setInvoice(() => (updatedInvoice));
    localStorage.setItem('draftInvoice', JSON.stringify(updatedInvoice));
  };

  const saveInvoice = () => {
    if(invoice.invoice_items.length > 0) {
      useDispatch(addInvoice(invoice));
      setInvoiceItems([]);
      setInvoice({ notes: '', currency: 'USD', subtotal: 0.00, total_tax: 0.00, total_excl_tax: 0.00, total_discount: 0.00, invoice_items: [] });
      localStorage.removeItem('draftInvoice');
      alert('Invoice saved!');
    }else{
      alert('Please add at least one item to the invoice.');
    }
    
  };

  return (
    <>
      <span className='display-title'>Create Invoice</span>
      <div className='card-hovered invoice-card'>
        <form className='new-item-form' onSubmit={(e) => addItem(e)}>
          <label>
            Product name *
            <input type='text'
              onInput={(e) => setInvoiceItem({ ...item, name: e.target.value })} placeholder='Enter Product name'
              required
            />
          </label>
          <label>
            Description
            <textarea placeholder='Type Description'
              onInput={(e) => setInvoiceItem({ ...item, description: e.target.value })}
            ></textarea>
          </label>
          <label>
            Quantity *
            <input type='number' placeholder='Total items' step="1" required
              onInput={(e) => setInvoiceItem({ ...item, quantity: e.target.value })}
            />
          </label>
          <label>
            unit price *
            <input type='number' placeholder='cost per item' pattern="^\d*(\.\d{0,2})?$" step=".01"
              required
              onInput={(e) => setInvoiceItem({ ...item, unit_price: e.target.value })}
            />
          </label>
          <label>
            Unit tax rate
            <input type='text' placeholder='Tax % per item' max="100" pattern="^\d*(\.\d{0,2})?$" step=".01"
              onInput={(e) => setInvoiceItem({ ...item, unit_tax_rate: e.target.value })}
            />
          </label>
          <label>
            Discount amount
            <input type='number' placeholder='Discount amount' pattern="^\d*(\.\d{0,2})?$" step=".01"
              onInput={(e) => setInvoiceItem({ ...item, discount: e.target.value })}
            />
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
                <td>{numberFormat(invoice.total)}</td>
                <td className='actions'>
                  <button className='btn danger-btn' onClick={() => removeItem(i)}>Remove</button>
                </td>
              </tr>)
              )
            }
          </tbody>
        </table>
        <br />
        <br />
        <div className='invoice-summery'>
          <label className='notes'>
            Special Notes
            <textarea value={invoice.notes} onInput={(e => updateNote(e.target.value))} placeholder='Add Notes, or terms and conditions here'></textarea>
          </label>
          <span className='stats'>
            <span>
              <b>Subtotal:</b>
              <span>{currency} {numberFormat(subtotal())}</span>
            </span>
            <span>
              <b>Tax:</b>
              <span>{currency} {numberFormat(total_tax())}</span>
            </span>
            <span>
              <b>Total Excluding TAX:</b>
              <span>{currency} {numberFormat(total_excl_tax())}</span>
            </span>
          </span>
        </div>
        <button className='save-invoice btn' onClick={() => saveInvoice()}>
          Save Invoice
        </button>
      </div>
    </>
  )
}
