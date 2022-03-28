import { useState } from 'react';
import NRLogo from './assets/nossa-reserva-logo.svg';

import './styles.css';

function App() {

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={NRLogo} alt=""/>
            </span>
            <span className="login-form-title">Condomínio<br></br>Sta. Maria</span>

            <div className="wrap-input">
              <input 
                className={login !== "" ? "has-val input" : "input"}
                type="login"
                value={login}
                onChange={l => setLogin(l.target.value)}   
              />
              <span className="focus-input" data-placeholder='Login'></span>
            </div>

            <div className="wrap-input">
              <input 
                className={senha !== "" ? "has-val input" : "input"}
                type="senha"
                value={senha}
                onChange={s => setSenha(s.target.value)} 
              />
              <span className="focus-input" data-placeholder='Senha'></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>

            <div className="create-account">
              <span className="txt1">Não possui conta?</span>
              <a href="#" className="txt2">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
