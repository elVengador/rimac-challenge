import React from 'react'
import './Stepper.scss'

interface StepperProps {
    onBackOption: () => void,
    currentStep: number,
    totalSteps: number
}

export const Stepper = ({ onBackOption, currentStep, totalSteps }: StepperProps) => {

    return (
        <div className="stepper">
            <div className="stepper--back" onClick={onBackOption}></div>
            <span className='stepper--info'>Paso {currentStep} de {totalSteps}</span>
            <div className="stepper--bar"></div>
        </div>
    )
}
