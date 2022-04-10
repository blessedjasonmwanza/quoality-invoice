const saveInvoices = (invoices) => localStorage.setItem('invoices', JSON.stringify(invoices));
export default saveInvoices;