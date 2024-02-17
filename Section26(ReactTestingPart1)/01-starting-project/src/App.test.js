import { render, screen } from '@testing-library/react';
import App from './App';
// import Greeting from './components/Greeting';
xdescribe('testing App.js', ()=>{

  // test('renders learn react link', () => {
    //   render(<App />);
    //   const linkElement = screen.getByText(/learn react/i);
    //   expect(linkElement).toBeInTheDocument();
// });
test('search for button', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
// test('renders hello world! again', () => {
//   // Arrange
// 	render(<Greeting />)
// 	// Act
// 	// ..nothing for us in this test
// 	// Assert
// 	const text = screen.getByText(/hello world!/i)
// 	expect(text).toBeInTheDocument()
// })
// test('renders h2', () => {
//   // Arrange
// 	render(<Greeting />)
// 	// Act
// 	// ..nothing for us in this test
// 	// Assert
// 	const goodText = screen.getByText("It's good to see you!")
// 	expect(goodText).toBeInTheDocument()
// })
// test('renders good', () => {
//   // Arrange
// 	render(<Greeting />)
// 	// Act
// 	// ..nothing for us in this test
// 	// Assert
// 	const goodText = screen.getByText(/good/i)
// 	expect(goodText).toBeInTheDocument()
// })

})