import { render, screen } from '@testing-library/react';
import App from './App';
import { userEvent } from '@testing-library/user-event';

describe('Testing App.js', ()=>{

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders banner', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner')// role is not by tag name
  console.log(headerElement)
  expect(headerElement).toHaveClass('App-header')
});
test('finds a header element', () => {
	render(<App />)
	// const headerElement = getByRole('banner') // you can extract methods
	const headerElement = screen.getByRole('banner') // you can extract methods
	expect(headerElement.tagName).toBe('HEADER') // Assert that the element is a <header> tag
})

})