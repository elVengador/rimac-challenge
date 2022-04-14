import React, { useState } from 'react'

import './LoginForm.scss'
import { Button } from '../Button/Button'


interface LoginProps {
    onSubmit: () => void
}

export const LoginForm = ({ ...props }: LoginProps) => {
    const [typeDocument, setTypeDocument] = useState('DNI')
    const [documentNumber, setDocumentNumber] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [licensePlate, setLicensePlate] = useState('')
    const [acceptTerms, setAcceptTerms] = useState(false)

    const documentNumberIsValid = () => {
        if (!documentNumber) { return false }
        const DNI_VALIDATOR = /^[0-9]{8}$/gm
        return !DNI_VALIDATOR.test(documentNumber)
    }

    const phoneNumberIsInvalid = () => {
        if (!phoneNumber) { return false }
        const PHONE_NUMBER_VALIDATOR = /^[1-9][0-9]{8}$/gm
        return !PHONE_NUMBER_VALIDATOR.test(phoneNumber)
    }

    const licensePlateIsInvalid = () => {
        if (!licensePlate) { return false }
        const LICENSE_PLATE_VALIDATOR = /^[A-Z]{3}-[0-9]{3}$/gm
        return !LICENSE_PLATE_VALIDATOR.test(licensePlate)
    }

    const onChangeDocumentNumber = (newDocumentNumber: string) => {
        setDocumentNumber(newDocumentNumber)
    }

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!typeDocument || !documentNumber || !phoneNumber || !licensePlate || !acceptTerms) { return alert('Hay campos invalidos') }
        props.onSubmit()
    }

    return (
        <form className="login-form">
            <h3 className='title-form'>Déjanos tus datos</h3>
            <div className="group-input">
                <select
                    name=""
                    id=""
                    className='dni'
                    value={typeDocument}
                    onChange={e => setTypeDocument(e.currentTarget.value)}>
                    <option value="DNI">DNI</option>
                </select>
                <input
                    type="text"
                    className={`document-number ${documentNumberIsValid() ? 'error' : ''}`}
                    value={documentNumber}
                    onChange={e => onChangeDocumentNumber(e.currentTarget.value)}
                    placeholder='Nro. de doc' />
            </div>

            <input
                type="text"
                className={`phone-number ${phoneNumberIsInvalid() ? 'error' : ''}`}
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.currentTarget.value)}
                placeholder='Celular' />

            <input
                type="text"
                className={`license-plate ${licensePlateIsInvalid() ? 'error' : ''}`}
                value={licensePlate}
                onChange={e => setLicensePlate(e.currentTarget.value.toUpperCase())}
                placeholder='Placa' />

            <div className="terms">
                <div
                    className={`terms--check ${acceptTerms ? 'active' : ''}`}
                    onClick={() => setAcceptTerms(!acceptTerms)}
                ></div>
                <span>
                    Acepto la <a href="">Política de Protecciòn de Datos Personales</a> y los <a href="">Términos y Condiciones.</a>
                </span>
            </div>
            <Button children='cotízalo' size='lg' onClick={onSubmit} />
        </form>
    )
}
