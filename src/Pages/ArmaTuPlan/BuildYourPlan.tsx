import React from 'react'
import { Button } from '../../Components/Button/Button'
import { Coverage } from '../../Components/Coverage/Coverage'
import './BuildYourPlan.scss'

export const BuildYourPlan = () => {
    return (
        <div className="build-plan">
            <div className="stepper">
                <div className="stepper--back"></div>
                <span className='stepper--info'>Paso 2 de 2</span>
                <div className="stepper--bar"></div>
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

            <div className="amount">
                <h3>Indica la suma asegurada</h3>
                <div className='interval'>
                    <span>MIN $12.500</span>
                    <span>|</span>
                    <span>MAX $16,500</span>
                </div>
                <div className="amount--options">
                    <span className='button__icon'></span>
                    <input type="text" />
                    <span className='button__icon'></span>
                </div>
            </div>

            <div className="options">
                <h2 className='options--subtitle'>Agrega o quita coberturas</h2>
                <nav className='options--navigation'>
                    <ul>
                        <li className='active'>Protege a tu auto</li>
                        <li>Protege a los que te rodeaN</li>
                        <li>mejora tu plAN</li>
                    </ul>
                </nav>
                {/* <article className="options--coverage">
                    <span>Icon</span>
                    <div className="title">
                        <h1>Llanta robada</h1>
                        <div>(===)</div>

                    </div>
                    <div></div>
                    <div>
                        <p>
                            He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                        </p>
                        <div className="action">ver menos</div>
                    </div>
                </article> */}
                <Coverage />
                <div className="options--footer">
                    <p>$35.00</p>
                    <p>MENSUAL</p>
                    <Button>lo quiero</Button>
                </div>
            </div>
        </div>
    )
}
