import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Testing out The Greeting Comp', ()=>{
    it('test h2', ()=>{
        render(<Greeting/>)
        // how to find different h tags , second argument is the level
        const h2 = screen.getByRole('heading', {level:2})
        expect(h2.tagName).toBe('H2')
        // How to access text content of an element
        expect(h2.textContent).toBe('Hello World!')
    })
    it('test h3', ()=>{
        render(<Greeting/>)
        // how to find different h tags , second argument is the level
        const h3 = screen.getByRole('heading', {level:3})
        expect(h3.tagName).toBe('H3')
        // How to access text content of an element
        expect(h3.textContent).toBe('Hello World! from H3')
    })
})
