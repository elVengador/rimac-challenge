import React from 'react'
import './Button.scss'

interface ButtonProps {
    children: string
    size?: 'md' | 'lg'
}

export const Button = ({ children, size = 'md' }: ButtonProps) => {
    return (
        <button className={`button button-${size}`}>{children}</button>
    )
}
