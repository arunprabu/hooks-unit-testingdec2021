import { render, screen } from '@testing-library/react';
import App from './App'; // 

test('renders Learn Hooks link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Hooks/i);
  expect(linkElement).toBeInTheDocument();
});
