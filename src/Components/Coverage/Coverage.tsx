import React, { useState } from 'react'
import { Switch } from '../Switch/Switch'
import { useSwitch } from '../Switch/useSwitch'

import './Coverage.scss'

export const Coverage = () => {
    const [showContent, setShowContent] = useState(false)
    const { SwitchComponent, active, toggleSwitch } = useSwitch()
    return (
        <article className="coverage">
            <div className="coverage-wrapper">
                <div className='coverage--icon'></div>
                <div className="coverage--title">
                    <h1>Llanta robada</h1>
                    <SwitchComponent />

                </div>
                <div></div>
                <div>
                    {showContent && <p className='coverage--content'>
                        He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                    </p>}
                    {showContent && <div
                        className="action show-action"
                        onClick={() => setShowContent(false)}>
                        ver menos
                        <div className='icon'></div>
                    </div>}
                    {!showContent && <div
                        className="action hide-action"
                        onClick={() => setShowContent(true)}>
                        ver más
                        <div className='icon'></div>
                    </div>}
                </div>
            </div>
        </article>
    )
}
