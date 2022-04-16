import React from 'react'

import './Thanks.scss'

import { Button } from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom'


export const Thanks = () => {
    const navigate = useNavigate()
    const totalCost = localStorage.getItem('totalCost')

    if (!totalCost) { navigate('/home') }

    return (
        <div className='thanks'>
            <div className="thanks--cover-image">

            </div>
            <div className="thanks--content">
                <h1 >
                    <span className='primary'>¡Te damos la bienvenida!</span>  Cuenta con nosotros para proteger tu vehículo
                </h1>
                <p >
                    Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
                    <span className='email'> joel.sanchez@gmail.com</span>
                </p>
                <p className='total-cost'>Mensual: ${Number(totalCost).toLocaleString('en-US')}</p>
                <div className="actions">
                    <Button children='cómo usar mi seguro' size='lg' onClick={() => { console.log('navigate to some tutorial') }} />
                </div>
            </div>
            <div className="thanks--footer">
                <p>© 2021 RIMAC Seguros y Reaseguros.</p>
            </div>
        </div>
    )
}
