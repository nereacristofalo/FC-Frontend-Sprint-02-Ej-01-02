import React from 'react';
import './LoginForm.css';
import FormInput from '../FormInput/FormInput';

const LoginForm = () => {
  return (
    <form id="form">
      <FormInput label="Email" placeholder="Introdece tu correo" type="email" />
      <FormInput
        label="Contraseña"
        placeholder="Introdece tu contraseña"
        type="password"
      />

      <div className="form-item">
        <label className="form-checkbox" name="checkbox">
          <input type="checkbox" />
          Recuérdame
        </label>
        <button>He olvidado la contraseña</button>
      </div>

      <button className="btn btn-login">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
