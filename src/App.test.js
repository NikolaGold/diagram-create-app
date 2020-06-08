import React from 'react';
import { render } from '@testing-library/react';
import DiagramApp from './DiagramApp';

test('renders learn react link', () => {
  const { getByText } = render(<DiagramApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
