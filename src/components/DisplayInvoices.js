import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { searchResults } from '../redux/store/invoices';
import '../assets/css/Table.css';
import FetchInvoices from './invoices/FetchInvoices';

export default function DisplayInvoices({page, status}) {
  const invoices = useSelector(state => state.invoices.invoices);
  const dispatch = useDispatch();
  useEffect(() => {
    const results = dispatch(FetchInvoices());
    const invoiceList = results.payload.filter(invoice => invoice.status === status);
      dispatch(searchResults(invoiceList));
  } , []);
  const editInvoice = (invoice) => alert(`Edit ${invoice.company_name} invoice coming soon!`);
  const searchInvoices = (e) => {
    const search = e.target.value;
    const savedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    if (search === '') {
      dispatch(searchResults(savedInvoices));
    } else {
      const filteredInvoices = savedInvoices.filter(invoice =>
        (
          invoice.company_name.toLowerCase().includes(search.toLowerCase()) ||
          invoice.notes.toLowerCase().includes(search.toLowerCase()) ||
          invoice.status.toLowerCase().includes(search.toLowerCase())
          
        )
      );
      dispatch(searchResults(filteredInvoices));
    }
  }
  return (
    <>
      <span className='display-title'>{page}</span>
      <div className='card-hovered'>
        <div className='invoice-search-bar d-flex'>
          <span />
          <label>
            <small>Find Invoices</small>
            <input type='search' placeholder='Search' onInput={(e) => searchInvoices(e)} />
          </label>
        </div>
        <table id="table" className='dt-table'>
          <thead>
            <tr>
              <th>Company</th>
              <th>Items</th>
              <th>Subtotal</th>
              <th>Total discount</th>
              <th>Total Excluding Tax</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              invoices.map((invoice, i) => (
                <tr key={i}>
                  <td>{invoice.company_name}</td>
                  <td>{invoice.invoice_items.map((item) => item.name).join(', ')}</td>
                  <td>{invoice.subtotal}</td>
                  <td>{invoice.total_discount}</td>
                  <td>{invoice.total_excl_tax}</td>
                  <td className='actions'>
                    <button className='btn' onClick={() => editInvoice(i)}>Edit</button>
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
