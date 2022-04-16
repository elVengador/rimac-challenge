import React from 'react'

import './UserInformation.scss'

interface UserInformationProps {
    plateCar: string,
    modelCar: string
}

export const UserInformation = ({ plateCar, modelCar }: UserInformationProps) => {
    return (
        <div className="user-information">
            <h1>Mira las coberturas</h1>
            <p>Conoce las coberturas para tu plan</p>
            <article className="card">
                <h1>Placa: {plateCar}</h1>
                <p>{modelCar}</p>
                <div className="card--effect"></div>
            </article>
        </div>

    )
}
