import React from 'react';
import { render, screen } from '@testing-library/react';
import LeftNav from '../components/LeftNav';

test('renders learn react link', () => {
  render(<LeftNav />);
  const linkElement = screen.getByText(/Invoice/i);
  expect(linkElement).toBeInTheDocument();
});
