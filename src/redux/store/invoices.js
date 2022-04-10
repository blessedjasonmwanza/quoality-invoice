/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import saveinvoices from '../../components/invoices/Saveinvoices';
// slice
const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: {
    invoices: [],
  },
  reducers: {
    invoicesSuccess: (state, action) => {
      state.invoices = action.payload;
      saveInvoices(action.payload);
    },
    addInvoice: (state, action) => {
      state.invoices.push(action.payload);
      saveInvoices(state.invoices);
    },
    searchResults: (state, action) => {
      state.invoices = action.payload;
    },
    updateInvoiceStatus: (state, action) => {
      const {id, status} = action.payload;
      const updatedInvoices = state.invoices.map(order => (order.id === id ? { ...order, status: status } : order));
      saveInvoices(updatedInvoices);
      state.invoices = updatedInvoices;
    }
  },
});

export default invoicesSlice.reducer;

// Actions
export const {
  invoicesSuccess, searchResults, archiveOrder,updateInvoiceStatus, addInvoice
} = invoicesSlice.actions;
