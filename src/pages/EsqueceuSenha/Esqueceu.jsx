import React from 'react';

import logo from '../../airbnb (1).svg'

import { Link } from 'react-router-dom';

import './styles.css'

export default function Esqueceu() {
  return (
    <div style={{ flex: 1, height: '100vh', width: '100%', z: '4', display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className='container'>
        <form>
          <img className="mb-4" src={logo} alt="Airbnb-logo" width="200" height="100" />
          <h1 className="h3 mb-3 text-muted">Informe seu Email</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email</label>
          </div>
          <button className="btn btn-primary" type="submit">Recuperar senha</button>
          <Link to={'/'}>Continuar sem Login</Link>
        </form>
      </div>
    </div>
  )
}
