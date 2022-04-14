import React from 'react'
import './ButtonIcon.scss'

interface ButtonIconProps {
    icon: string,
    onClick: () => void
}

export const ButtonIcon = ({ icon, onClick }: ButtonIconProps) => {
    return (
        <div
            className='button-icon'
            style={{ backgroundImage: `url(${icon})` }}
            onClick={onClick}>
        </div>
    )
}
