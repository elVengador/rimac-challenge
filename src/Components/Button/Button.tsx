import React from 'react'
import './Button.scss'

interface ButtonProps {
    children: string
    size?: 'md' | 'lg'
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = ({ children, size = 'md', onClick }: ButtonProps) => {
    return (
        <button
            className={`button button-${size}`}
            onClick={e => onClick(e)}
        >{children}</button>
    )
}
