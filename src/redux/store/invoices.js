/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import saveInvoices from '../../components/orders/SaveInvoices';
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
      const newInvoices = [...state.invoices, action.payload];
      saveInvoices(newInvoices);
      state.invoices = newInvoices;
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
  invoicesSuccess, searchResults, updateInvoiceStatus, addInvoice,
} = invoicesSlice.actions;
