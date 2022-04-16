import React, { useState } from 'react'

import './Coverage.scss'

interface CoverageProps {
    icon: string,
    title: string,
    content: string,
    initialShowContent?: boolean,
    options: JSX.Element
}

export const Coverage = ({ icon, title, content, options, initialShowContent = false }: CoverageProps) => {
    const [showContent, setShowContent] = useState(initialShowContent)

    return (
        <article className="coverage">
            <div className="coverage-wrapper">
                <div className='coverage--icon' style={{ backgroundImage: `url(${icon})` }}></div>
                <div className="coverage--title">
                    <h1>{title}</h1>
                    <div className="options">
                        {options}
                    </div>

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
