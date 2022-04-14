import React from 'react'
import './Switch.scss'

interface SwitchProps {
    state: boolean
    toggle: () => void
}

export const Switch = ({ state, toggle }: SwitchProps) => {
    const switchClass = state ? 'switch active' : 'switch'
    return (
        <div className={switchClass} onClick={toggle}>
            <div className='switch--trigger'></div>
        </div>
    )
}
