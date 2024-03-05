import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Greeting from "./Greeting"
describe('testing Greeting component', ()=>{
    test('renders hello world!', () => {
        // Arrange
        render(<Greeting />)
        // Act
        // ..nothing for us in this test
        // Assert 
        const text = screen.getByText(/hello world!/i)
        expect(text).toBeInTheDocument()
    })
    test('renders hello world! again', () => {
        // Arrange
        render(<Greeting />)
        // Act
        // ..nothing for us in this test
        // Assert 
        const text = screen.getByText("hello world", {exact :false})
        expect(text).toBeInTheDocument()
    })
      test('renders text before changedText is True!', () => {
				// Arrange
				render(<Greeting />)
				// Act
				// ..nothing for us in this test
				// Assert
				const text = screen.getByText("It's good to see you!", { exact: false })
				expect(text).toBeInTheDocument()
			})
    test('renders Changed!', () => {
        // Arrange
        render(<Greeting />)
        // get button 
        const button = screen.getByText('Change Text!')
        console.log(button)
        // set click event on button
        fireEvent.click(button)
        
        const text = screen.getByText("Changed!", {exact :false})
        expect(text).toBeInTheDocument()
        expect(text).toBeVisible()
    })
test('renders good to see you if button was not clicked his test', ()=>{
    render(<Greeting/>)

    const outputElement = screen.getByText(/good to see you/i)
    expect(outputElement).toBeVisible();
    expect(outputElement).toBeInTheDocument();

})
test('renders Changed if button was clicked his test', ()=>{
    // Arrange
    render(<Greeting/>)
    // Act
    const button=screen.getByRole('button')
    userEvent.click(button)
    // Assert
    const outputElement = screen.getByText(/changed/i)
    expect(outputElement).toBeVisible();
    expect(outputElement).toBeInTheDocument();

})
test('does not render good to see you when button is clicked', ()=>{
    // here we want to check that when the button is clicked
    // the original text is no longer on the screen 
    // Arrange
    render(<Greeting/>)
    // Act
    const button=screen.getByRole('button')
    const outputElement = screen.getByText(/good to see you/i)
    userEvent.click(button)
    // Assert
    expect(outputElement).not.toBeVisible();
    expect(outputElement).not.toBeInTheDocument();

})
test('does not render good to see you when button is clicked his test', ()=>{
    // here we want to check that when the button is clicked
    // the original text is no longer on the screen 
    // Arrange
    render(<Greeting/>)
    // Act
    const button=screen.getByRole('button')
    userEvent.click(button)
    // Assert
    const outputElement = screen.queryByText(/good to see you/i)
    expect(outputElement).toBeNull();

})
    
})
