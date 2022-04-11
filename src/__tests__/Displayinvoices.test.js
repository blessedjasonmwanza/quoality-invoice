import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux'
import DisplayInvoices from '../components/DisplayInvoices'
import store from '../redux/store/configureStore';

let root;

describe('DisplayInvoices', () => {
  it('renders Overdue invoices page without crashing', () => {
    act((() => {
      root = create(
        <Provider store={store}>
          <DisplayInvoices page='Overdue Invoices' status='overdue' />
        </Provider>
      )
    }))
    expect(root.toJSON()).toMatchSnapshot();
  });

  it('renders Paid invoices page without crashing', () => {
    act((() => {
      root = create(
        <Provider store={store}>
          <DisplayInvoices page='Paid Invoices' status='paid' />
        </Provider>
      )
    }))
    expect(root.toJSON()).toMatchSnapshot();
  });
  it('renders Unpaid invoices page without crashing', () => {
    act((() => {
      root = create(
        <Provider store={store}>
          <DisplayInvoices page='Unpaid Invoices' status='unpaid' />
        </Provider>
      )
    }))
    expect(root.toJSON()).toMatchSnapshot();
  });
  it('renders All invoices page without crashing', () => {
    act((() => {
      root = create(
        <Provider store={store}>
          <DisplayInvoices page='All Invoices' status='all' />
        </Provider>
      )
    }))
    expect(root.toJSON()).toMatchSnapshot();
  });
});