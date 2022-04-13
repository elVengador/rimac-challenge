import React from 'react'
import './Login.scss'

export const Login = () => {
    return (
        <main className="login">
            <div className="login--background"></div>
            <div className="login--message">
                <div className="message-wrapper">
                    <p className='small-text'>¡NUEVO!</p>
                    <h1 className='big-text'>Seguro Vehicular <span className='red'>Tracking</span></h1>
                    <p className='normal-text'>Cuentanos donde le haras seguimiento a tu seguro</p>
                </div>
            </div>
            <form className="login--form">
                <h3 className='title-form'>Déjanos tus datos</h3>
                <div className="group-input">
                    <select name="" id="" className='dni'>
                        <option value="">DNI</option>
                    </select>
                    <input type="text" className='document-number' placeholder='Nro. de doc' />
                </div>
                <input type="text" className='phone-number' placeholder='Celular' />
                <input type="text" className='license-plate' placeholder='Placa' />
                <div className="terms">
                    <div className='terms--check'></div>
                    <span>
                        Acepto la <a href="">Política de Protecciòn de Datos Personales</a> y los <a href="">Términos y Condiciones.</a>
                    </span>
                </div>
                <button className='button'>cotízalo</button>
            </form>
        </main>
    )
}
