import { render, screen } from '@testing-library/react'
import Greeting2 from './Greeting2'

describe('testing connected components', () => {
	test('Output', () => {
		render(<Greeting2 />)
		const text = screen.getByText('testing')
		expect(text).toBeInTheDocument()
	})
})
