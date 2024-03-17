import { fireEvent, render, screen } from '@testing-library/react'
import Greeting from './Greeting'
import userEvent from '@testing-library/user-event'

describe('Testing out The Greeting Comp', () => {
	it('test h2 exact', () => {
		render(<Greeting />)
		// how to find different h tags , second argument is the level
		const h2 = screen.getByText('Hello World!')
		const h2Exact = screen.getByText('Hello World!', { exact: true })

		// How to access text content of an element
		expect(h2).toBeInTheDocument()
		expect(h2Exact).toBeInTheDocument()
	})

	it('test h2', () => {
		render(<Greeting />)
		// how to find different h tags , second argument is the level
		const h2 = screen.getByRole('heading', { level: 2 })
		expect(h2.tagName).toBe('H2')
		// How to access text content of an element
		expect(h2.textContent).toBe('Hello World!')
	})
	it('test h3', () => {
		render(<Greeting />)
		// how to find different h tags , second argument is the level
		const h3 = screen.getByRole('heading', { level: 3 })
		expect(h3.tagName).toBe('H3')
		// How to access text content of an element
		expect(h3.textContent).toBe('Hello World! from H3')
	})
	it('test btn with Query', () => {
		render(<Greeting />)
		// how to find different h tags , second argument is the level
		const btn = screen.queryByRole('button')

		// How to access text content of an element
		expect(btn).toBeInTheDocument()
	})
	// Testing User Interaction my code
	test('with fireEvent', () => {
		render(<Greeting />)
		const btn = screen.getByRole('button')
		fireEvent.click(btn)
		fireEvent.click(btn)
		const h3 = screen.getByRole('heading', { level: 3 })
		expect(h3.tagName).toBe('H3')
		// How to access text content of an element
		expect(h3.textContent).toBe('Hello World! from H3')
	})
	test('with fireEvent not found h3', () => {
		render(<Greeting />)
		const btn = screen.getByRole('button')
		const h3 = screen.getByRole('heading', { level: 3 })
		fireEvent.click(btn)
		// How to access text content of an element
		expect(h3).not.toBeInTheDocument()
	})
	test('with fireEvent p-tag', () => {
		render(<Greeting />)
		const btn = screen.getByRole('button')
		fireEvent.click(btn)
		const p = screen.getByText("It's good to see you!")
		// How to access text content of an element
		expect(p).toBeInTheDocument()
	})
	test('with fireEvent not found p-tag', () => {
		render(<Greeting />)
		const btn = screen.getByRole('button')
		fireEvent.click(btn)
		const p = screen.getByText("It's good to see you!")
		fireEvent.click(btn)
		// How to access text content of an element
		expect(p).not.toBeInTheDocument()
	})
	// Testing interactions his code
	test('renders "Hello World! from H3" if the button was not clicked', () => {
		render(<Greeting />)
		const h3 = screen.getByText('Hello World! from H3', { exact: false })
		expect(h3).toBeInTheDocument()
	})
	test('renders changed if button was click', () => {
		render(<Greeting />)
		const btn = screen.getByRole('button')
		userEvent.click(btn)

		const p = screen.getByText("It's good to see you!")
		console.log(p)
		expect(p).toBeInTheDocument()
	})
	// Now if we want to check if something is not found we would have to use query by text or find the element first before we trigger the event
	test('not renders "Hello World! from H3" if the button was clicked', () => {
		render(<Greeting />)
		const h3 = screen.getByText('Hello World! from H3', { exact: false })
		const btn = screen.getByRole('button')
		userEvent.click(btn)
		expect(h3).not.toBeInTheDocument()
	})
	// we can also use the query method and check if its null
	test('not renders with query "Hello World! from H3" if the button was clicked', () => {
		render(<Greeting />)
		const btn = screen.getByRole('button')
		userEvent.click(btn)

		const h3 = screen.queryByText('Hello World! from H3', {exact:false})
		expect(h3).toBeNull()
	})
})
