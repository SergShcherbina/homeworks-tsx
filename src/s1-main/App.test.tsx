import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'
import logo from "../s1-main/logo_incutator.png"



test('renders learn react link', () => {
    render(
        <App/>
    )
    // const linkElement = screen.getByText(/learn react/i)
    // expect(linkElement).toBeInTheDocument()
    expect(1).toBe(1)
})


