import React from 'react'
import './Header.scss'

export const Header = () => {
    return (
        <header className='header'>
            <div className="header--logo">
                <img src="/rimac-logo.svg" alt="" />
            </div>
            <div className="header--options">
                <img src="/phone-icon.svg" alt="" />
                <span>Llámanos</span>
            </div>
        </header>
    )
}
