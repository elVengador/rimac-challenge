import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask';


import './BuildYourPlan.scss'
import { ButtonIcon } from '../../Components/Button-Icon/ButtonIcon'
import { Button } from '../../Components/Button/Button'
import { Coverage } from '../../Components/Coverage/Coverage'
import { UserInformation, useUserInformation } from '../../Hooks/useUserInformation'
import { coverageCar } from './BuildYourPlan.model'

export const BuildYourPlan = () => {
    const RE_DOLLAR_OR_COMMAS = /\$|,|_/gm
    const navigate = useNavigate()
    const { userInformationState, dispatch } = useUserInformation()

    const onDecrementInsuredAmount = () => {
        if (Number(userInformationState.insuredAmount) <= 12500) { return }

        const newAmount = Number(userInformationState.insuredAmount) - 100
        dispatch({ type: 'UPDATE_INSURED_AMOUNT', payload: newAmount.toString() })
    }

    const onIncrementInsuredAmount = () => {
        if (Number(userInformationState.insuredAmount) > 16500) { return }

        const newAmount = Number(userInformationState.insuredAmount) + 100
        dispatch({ type: 'UPDATE_INSURED_AMOUNT', payload: newAmount.toString() })
    }

    const onChangeInsuredAmount = (value: string) => {
        dispatch({ type: 'UPDATE_INSURED_AMOUNT', payload: value })
    }

    const coverageCarFilter = () => {
        if (Number(userInformationState.insuredAmount) > 16000) { return coverageCar }
        return coverageCar.filter(cur => cur.title !== 'Choque y/o pasarte la luz roja')
    }

    // const getTotalCoverage = () => {
    //     const coverageBase = 20
    //     coverageCarFilter().reduce((acu, cur) =>
    //     if (cur.state)
    //     , 0)

    // }


    return (
        <div className="build-plan">
            <div className="stepper">
                <div className="stepper--back" onClick={() => navigate('/home')}></div>
                <span className='stepper--info'>Paso 2 de 2</span>
                <div className="stepper--bar"></div>
            </div>

            <div className="user-information">
                <h1>Mira las coberturas</h1>
                <p>Conoce las coberturas para tu plan</p>
                <article className="card">
                    <h1>{userInformationState.name}</h1>
                    <p>{userInformationState.modelCar}</p>
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
                    <ButtonIcon icon='/minus-icon.svg' onClick={onDecrementInsuredAmount} />
                    <InputMask
                        mask="$ 99,999"
                        // maskChar=" "
                        value={userInformationState.insuredAmount}
                        onChange={e => onChangeInsuredAmount(e.currentTarget.value.replaceAll(RE_DOLLAR_OR_COMMAS, ''))}
                        style={{ fontWeight: '400', color: '#494F66' }}
                    />
                    {/* <input type="number" value={userInformationState.insuredAmount} onChange={e => onChangeInsuredAmount(e.currentTarget.value)} /> */}
                    <ButtonIcon icon='/plus-icon.svg' onClick={onIncrementInsuredAmount} />
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
                    coverageCarFilter().map((cur, idx) => <Coverage
                        icon={cur.icon}
                        title={cur.title}
                        content={cur.content}
                        initialShowContent={cur.state}
                        accepted={true}
                        key={idx}
                    />)
                }
                <div className="options--footer">
                    <div className='total'>
                        <p className='total--amount'>$35.00</p>
                        <p className='total--time'>MENSUAL</p>
                    </div>
                    <Button onClick={() => console.log('lo quiero')}>lo quiero</Button>
                </div>
            </div>
        </div>
    )
}
