import { render, screen } from '@testing-library/react'
import Async from './Async'

describe('Testing Async Component', () => {
	// test('testing li have been populated', async ()=>{
	//     render(<Async/>)
	//     const listItem =  await screen.findAllByRole('listitem')
	//      expect(listItem).not.toHaveLength(0)

	// })
	test('testing li have been populated', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
					json: async () => [
						{ id: 0, title: 'test0' },
						{ id: 1, title: 'test1' },
						{ id: 2, title: 'test2' },
					],
				})
		render(<Async />)
		const listItem = await screen.findAllByRole('listitem')
		expect(listItem).not.toHaveLength(0)
	})
})
