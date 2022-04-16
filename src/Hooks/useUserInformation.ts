import React, { useReducer } from 'react'

export interface UserInformation {
    name: string,
    plateCar: string,
    modelCar: string,
    insuredAmount: string,
    totalCost: string
}

interface Action {
    type: 'UPDATE_INSURED_AMOUNT',
    payload: string
}

export const useUserInformation = () => {

    const initialState: UserInformation = {
        name: localStorage.getItem('name') || '',
        plateCar: localStorage.getItem('plateCar') || '',
        modelCar: localStorage.getItem('modelCar') || '',
        // insuredAmount: '12500',
        insuredAmount: localStorage.getItem('insuredAmount') || '12500',
        totalCost: localStorage.getItem('totalCost') || '0',
    }

    const reducer = (state: UserInformation, action: Action) => {
        switch (action.type) {
            case 'UPDATE_INSURED_AMOUNT':
                localStorage.setItem('insuredAmount', action.payload)
                return { ...state, insuredAmount: action.payload }
            default:
                return state
        }
    }

    const [userInformationState, dispatch] = useReducer(reducer, initialState)

    return { userInformationState, dispatch }
}
