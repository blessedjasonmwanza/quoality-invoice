import { invoicesSuccess } from "../../redux/store/invoices";

const FetchInvoices = (dispatch) => {
      const invoices = localStorage.getItem('invoices') ? JSON.parse(localStorage.getItem('invoices')) : [];
      return invoicesSuccess(invoices);
};

export default FetchInvoices;