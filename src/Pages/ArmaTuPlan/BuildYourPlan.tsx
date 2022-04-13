import React from 'react'
import './BuildYourPlan.scss'

export const BuildYourPlan = () => {
    return (
        <div className="build-plan">
            <div className="stepper">
                <div className="stepper--back">B</div>
                <span>Paso 2 de 2</span>
                <div className="stepper--bar">--</div>
            </div>
            <div className="user-information">
                <h1>Mira las coberturas</h1>
                <p>Conoce las coberturas para tu plan</p>
                <article className="card">
                    <h1>Placa: C2U-114</h1>
                    <p>Wolkswagen 2019 Golf</p>
                </article>
                <div className="card--effect"></div>
            </div>
            <div className="options">
                <h3>Indica la suma asegurada</h3>
                <p>
                    <span>MIN $12.500</span>
                    <span>|</span>
                    <span>MAX $16,500</span>
                </p>
                <div className="options--amount">
                    <span>-</span>
                    <input type="text" />
                    <span>+</span>
                </div>
                <h2>Agrega o quita coberturas</h2>
                <nav>
                    <ul>
                        <li>Protege a tu auto</li>
                        <li>Protege a los que te rodeaN</li>
                        <li>mejora tu plAN</li>
                    </ul>
                </nav>
                <article className="options--coverage">
                    <span>Icon</span>
                    <div>
                        <h1>Llanta robada</h1>
                        <details>
                            <summary>Overview</summary>
                            <ol>
                                <li>Cash on hand: $500.00</li>
                                <li>Current invoice: $75.30</li>
                                <li>Due date: 5/6/19</li>
                            </ol>
                        </details>
                    </div>
                    <div>Switch</div>
                </article>
                <div className="options--footer">
                    <p>$35.00</p>
                    <p>MENSUAL</p>
                    <button>lo quiero</button>
                </div>
            </div>
        </div>
    )
}
