import React, { useState } from 'react'
import { Switch } from './Switch'



export const useSwitch = (state = false) => {
    const [active, setActive] = useState(state)
    const toggleSwitch = () => setActive(active => !active)
    const SwitchComponent = () => <Switch state={active} toggle={toggleSwitch} />

    return { SwitchComponent, active, toggleSwitch }
}