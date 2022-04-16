import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './BuildYourPlan.scss'
import { Button } from '../../Components/Button/Button'
import { Coverage } from '../../Components/Coverage/Coverage'
import { useUserInformation } from '../../Hooks/useUserInformation'
import { Switch } from '../../Components/Switch/Switch';
import { useCoverageInformation } from '../../Hooks/useCoverageInformation';
import { UserInformation } from '../../Components/UserInformation/UserInformation'
import { SumAssuredControl } from '../../Components/SumAssuredControl/SumAssuredControl'
import { Stepper } from '../../Components/Stepper/Stepper'

export const BuildYourPlan = () => {
    const navigate = useNavigate()
    const { userInformationState, dispatch } = useUserInformation()
    const { coverageState, coverageDispatch } = useCoverageInformation()

    useEffect(() => {
        if (!userInformationState.plateCar || !userInformationState.modelCar || !userInformationState.name) { navigate('/home') }
    }, [userInformationState.plateCar, userInformationState.modelCar, userInformationState.name])

    const onDecrementInsuredAmount = () => {
        if (Number(userInformationState.insuredAmount) <= 12500) { return }

        const newAmount = Number(userInformationState.insuredAmount) - 100
        dispatch({ type: 'UPDATE_INSURED_AMOUNT', payload: newAmount.toString() })
    }

    const onIncrementInsuredAmount = () => {
        if (Number(userInformationState.insuredAmount) >= 16500) { return }

        const newAmount = Number(userInformationState.insuredAmount) + 100
        dispatch({ type: 'UPDATE_INSURED_AMOUNT', payload: newAmount.toString() })
    }

    const coverageCarFilter = () => {
        if (Number(userInformationState.insuredAmount) <= 16000) { return coverageState }
        return coverageState.filter(cur => cur.title !== 'Choque y/o pasarte la luz roja')
    }

    const getTotalCoverage = () => {
        const coverageBase = 20
        const coverageAmount = coverageCarFilter().reduce((acu, cur) => cur.accepted ? acu + cur.amount : acu, 0)
        return coverageBase + coverageAmount

    }

    const saveTotalCost = (total: number) => {
        const insuredAmount = Number(userInformationState.insuredAmount)
        if (insuredAmount < 12500 || insuredAmount > 16500) { return alert('La Suma asegurada es invalida!!, deve ser >= a 12500 y <= a 16500') }
        localStorage.setItem('totalCost', total.toString())
        navigate('/pagina-gracias')
    }

    return (
        <div className="build-plan">
            <Stepper
                currentStep={2}
                totalSteps={2}
                onBackOption={() => navigate('/home')}
            />

            <UserInformation
                plateCar={userInformationState.plateCar}
                modelCar={userInformationState.modelCar}
            />

            <SumAssuredControl
                insuredAmount={Number(userInformationState.insuredAmount)}
                onDecrement={onDecrementInsuredAmount} onIncrement={onIncrementInsuredAmount}
            />

            <div className="options">
                <h2 className='options--subtitle'>Agrega o quita coberturas</h2>
                <nav className='options--navigation'>
                    <ul>
                        <li className='active'>Protege a tu auto</li>
                        <li>Protege a los que te rodean</li>
                        <li>mejora tu plan</li>
                    </ul>
                </nav>
                {
                    coverageCarFilter().map((cur, idx) => {
                        const toggle = () => coverageDispatch({ type: 'UPDATE_ACCEPT_COVERAGE', payload: { title: cur.title, value: !cur.accepted } })
                        return <Coverage
                            icon={cur.icon}
                            title={cur.title}
                            content={cur.content}
                            initialShowContent={cur.showContent}
                            key={idx}
                            options={<Switch state={cur.accepted} toggle={toggle} />}
                        />
                    })
                }
                <div className="options--footer">
                    <div className='total'>
                        <p className='total--amount'>${getTotalCoverage()}</p>
                        <p className='total--time'>MENSUAL</p>
                    </div>
                    <Button onClick={() => saveTotalCost(getTotalCoverage())}>lo quiero</Button>
                </div>
            </div>
        </div >
    )
}
