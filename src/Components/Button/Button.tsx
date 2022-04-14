import React from 'react'
import './Button.scss'

interface ButtonProps {
    children: string
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <button className='button'>{children}</button>
    )
}
