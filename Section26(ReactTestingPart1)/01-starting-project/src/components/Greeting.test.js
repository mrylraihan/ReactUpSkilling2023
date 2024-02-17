import { render, screen } from "@testing-library/react"
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
    
})