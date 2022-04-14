import React from 'react'
import { Coverage, coverageCar } from '../Pages/BuildYourPlan/BuildYourPlan.model'

export interface CoverageInformation {
    coverage: Coverage[]
}

interface Action {
    type: 'UPDATE_SHOW_CONTENT' | 'UPDATE_ACCEPT_COVERAGE',
    payload: { coverageType: 'COVERAGE_CAR', value: boolean }
}

export const useCoverageInformation = () => {
    const initialState: CoverageInformation = {
        coverage: coverageCar
    }

    const reducer = (state: CoverageInformation, action: Action) => {
        switch (action.type) {
            case 'UPDATE_ACCEPT_COVERAGE'

                return { ...state, }
        }
    }

    return {}
}
