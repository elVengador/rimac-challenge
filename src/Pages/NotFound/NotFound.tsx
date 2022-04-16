import React from 'react'
import { useNavigate } from 'react-router-dom'

import './NotFound.scss'
import { Button } from '../../Components/Button/Button'

export const NotFound = () => {

    const navigate = useNavigate()

    return (
        <main className='not-found'>
            <h1 className='not-found--message'>Ups, Pagina no encontrada</h1>
            <Button children='Regresar al inicio' size='lg' onClick={() => navigate('/home')} />
        </main>
    )
}
