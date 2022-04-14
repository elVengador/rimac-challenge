import React, { useState } from 'react'
import { useSwitch } from '../Switch/useSwitch'

import './Coverage.scss'

interface CoverageProps {
    icon: string,
    title: string,
    content: string,
    state?: boolean
}

export const Coverage = ({ icon, title, content, state = false }: CoverageProps) => {
    const [showContent, setShowContent] = useState(state)
    const { SwitchComponent, active, toggleSwitch } = useSwitch()
    return (
        <article className="coverage">
            <div className="coverage-wrapper">
                <div className='coverage--icon' style={{ backgroundImage: `url(${icon})` }}></div>
                <div className="coverage--title">
                    <h1>{title}</h1>
                    <SwitchComponent />

                </div>
                <div></div>
                <div>
                    {showContent && <p className='coverage--content'>
                        {content}
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
