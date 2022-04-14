import React from 'react'

import './Thanks.scss'

import { Button } from '../../Components/Button/Button'


export const Thanks = () => {
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
                <div className="actions">
                    <Button children='cómo usar mi seguro' size='lg' />
                </div>
            </div>
            <div className="thanks--footer">
                <p>© 2021 RIMAC Seguros y Reaseguros.</p>
            </div>
        </div>
    )
}
