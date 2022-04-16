import React, { useReducer } from 'react'
import { Coverage, coverageCar } from '../Pages/BuildYourPlan/BuildYourPlan.model'

interface Action {
    type: 'UPDATE_SHOW_CONTENT' | 'UPDATE_ACCEPT_COVERAGE',
    payload: { title: string, value: boolean }
}

export const useCoverageInformation = () => {
    const initialState: Coverage[] = coverageCar

    const reducer = (state: Coverage[], action: Action) => {
        switch (action.type) {
            case 'UPDATE_ACCEPT_COVERAGE':
                return state.map(cur => {
                    if (cur.title !== action.payload.title) { return cur }
                    const coverageToUpdate = { ...cur }
                    coverageToUpdate.accepted = action.payload.value
                    return coverageToUpdate
                })


            case 'UPDATE_SHOW_CONTENT':
                return state.map(cur => {
                    if (cur.title !== action.payload.title) { return cur }
                    const coverageToUpdate = { ...cur }
                    coverageToUpdate.showContent = action.payload.value
                    return coverageToUpdate
                })
            default:
                return state
        }
    }

    const [coverageState, coverageDispatch] = useReducer(reducer, initialState)

    return { coverageState, coverageDispatch }
}
