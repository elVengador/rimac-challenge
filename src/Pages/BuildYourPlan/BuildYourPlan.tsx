import React from 'react'
import { ButtonIcon } from '../../Components/Button-Icon/ButtonIcon'
import { Button } from '../../Components/Button/Button'
import { Coverage } from '../../Components/Coverage/Coverage'
import './BuildYourPlan.scss'

interface Coverage {
    icon: string,
    title: string,
    content: string
    state: boolean
}
const coverageCar: Coverage[] = [
    {
        icon: '/stolen-wheel.svg',
        title: 'Llanta robada',
        content: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
        state: true
    },
    {
        icon: '/shock.svg',
        title: ' Choque y/o pasarte la luz roja ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dui faucibus, venenatis nunc vitae, pellentesque leo. Nulla sed dui purus.',
        state: false
    },
    {
        icon: '/run-over.svg',
        title: 'Atropello en la vía Evitamiento ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dui faucibus, venenatis nunc vitae, pellentesque leo. Nulla sed dui purus.',
        state: false
    },
]
const coverageFamily = []
const coveragePlan = []

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
                    <div className="card--effect"></div>
                </article>
            </div>

            <div className="amount">
                <h3>Indica la suma asegurada</h3>
                <div className='interval'>
                    <span>MIN $12.500</span>
                    <span>|</span>
                    <span>MAX $16,500</span>
                </div>
                <div className="amount--options">
                    <ButtonIcon icon='/minus-icon.svg' onClick={() => console.log('hi')} />
                    <input type="text" />
                    <ButtonIcon icon='/plus-icon.svg' onClick={() => console.log('hi')} />
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
                {
                    coverageCar.map((cur, idx) => <Coverage
                        icon={cur.icon}
                        title={cur.title}
                        content={cur.content}
                        state={cur.state}
                        key={idx}
                    />)
                }
                <div className="options--footer">
                    <div className='total'>
                        <p className='total--amount'>$35.00</p>
                        <p className='total--time'>MENSUAL</p>
                    </div>
                    <Button>lo quiero</Button>
                </div>
            </div>
        </div>
    )
}
