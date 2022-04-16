import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm, LoginFormValues } from '../../Components/FormLogin/LoginForm'
import { userInformation } from '../../interfaces'
import './Login.scss'

interface User {
    id: string,
    name: string,
    email: string,
    phone: string,
}

interface Car {
    plateCar: string,
    modelCar: string
}

export const Login = () => {

    const navigate = useNavigate()

    const getUserInformation = async (dni: string): Promise<User> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        return await res.json()
    }

    const getCarInformation = async (plateCar: string): Promise<Car> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        // here process data to get car data
        // we will mock carInfo to simulate the response
        const carInfoMock: Car = { plateCar, modelCar: 'Wolkswagen 2019 Golf' }
        return carInfoMock
    }

    const saveUserInLocal = ({ name, plateCar, modelCar, insuredAmount }: userInformation) => {
        localStorage.setItem('name', name)
        localStorage.setItem('plateCar', plateCar)
        localStorage.setItem('modelCar', modelCar)
        localStorage.setItem('insuredAmount', insuredAmount)
    }

    const onSubmit = async ({ documentNumber, licensePlate }: LoginFormValues) => {
        try {
            const userInformation: User = await getUserInformation(documentNumber)
            const carInformation: Car = await getCarInformation(licensePlate)
            saveUserInLocal({
                name: userInformation.name,
                plateCar: licensePlate,
                modelCar: carInformation.modelCar,
                insuredAmount: '12500'
            })
            navigate('/arma-tu-plan')
        } catch (err) {
            // manage error showing message to user
        }
    }

    return (
        <main className="login">
            <div className="login--background"></div>
            <div className="login--message">
                <div className="message-wrapper">
                    <p className='small-text'>¡NUEVO!</p>
                    <h1 className='big-text'>Seguro Vehicular <span className='primary'>Tracking</span></h1>
                    <p className='normal-text'>Cuentanos donde le haras seguimiento a tu seguro</p>
                </div>
            </div>

            <LoginForm onSubmit={onSubmit} />
        </main>
    )
}
