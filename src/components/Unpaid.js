import React from 'react'
import DisplayInvoices from './DisplayInvoices'

export default function Unpaid() {
  return (
    <DisplayInvoices page='Unpaid Invoices' status='unpaid' />
  )
}
