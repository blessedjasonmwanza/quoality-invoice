import React from 'react'
import DisplayInvoices from './DisplayInvoices'

export default function Overdue() {
  return (
    <DisplayInvoices page='Overdue Invoices' status='overdue' />
  )
}
