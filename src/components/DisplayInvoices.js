import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import '../assets/css/Table.css';

export default function DisplayInvoices({page, status}) {
  const invoices = useSelector(state => state.invoices.invoices);
  console.log(invoices);
  const [invoicesToDisplay, setInvoicesToDisplay] = useState([]);
  useEffect(() => {
    if(status.toLowerCase() === 'all') {
      setInvoicesToDisplay(invoices)
    }else{
      const invoicesList = invoices.filter(invoice => invoice.status === status);
      setInvoicesToDisplay(invoicesList)
    }
  },[]);
  const editInvoice = (invoice) => alert(`Edit ${invoice.company_name} invoice coming soon!`);
  return (
    <>
      <span className='display-title'>{page}</span>
      <div className='card-hovered'>
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
              invoicesToDisplay.map((invoice, i) => (
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
