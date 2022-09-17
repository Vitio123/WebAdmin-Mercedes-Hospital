import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coming soon text', () => {
  render(<App />);
  const h1lement = screen.getByText(/Vitio 123/i);
  expect(h1lement).toBeInTheDocument();
});
