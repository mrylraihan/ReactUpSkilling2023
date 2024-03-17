import { render, screen } from '@testing-library/react'
import Async from './Async'


describe('Testing Async Component', ()=>{
    test('testing li have been populated', async ()=>{
        render(<Async/>)
        const listItem =  await screen.findAllByRole('listitem')
         expect(listItem).not.toHaveLength(0)
            
    })
   
})