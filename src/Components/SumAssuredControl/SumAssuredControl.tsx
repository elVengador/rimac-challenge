import React from 'react'

import './SumAssuredControl.scss'
import { ButtonIcon } from '../Button-Icon/ButtonIcon'

interface SumAssuredControlProps {
    insuredAmount: number,
    onDecrement: () => void,
    onIncrement: () => void
}

export const SumAssuredControl = ({ insuredAmount, onDecrement, onIncrement }: SumAssuredControlProps) => {
    return (
        <div className="amount">
            <h3>Indica la suma asegurada</h3>
            <div className='interval'>
                <span>MIN $12.500</span>
                <span>|</span>
                <span>MAX $16,500</span>
            </div>
            <div className="amount--options">
                <ButtonIcon icon='/minus-icon.svg' onClick={onDecrement} />
                <span className='value'>$ {insuredAmount.toLocaleString('en-US')}</span>
                <ButtonIcon icon='/plus-icon.svg' onClick={onIncrement} />
            </div>
        </div>
    )
}
