import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../airbnb (1).svg";
import "./style.css";
import useAutenticacao from "../../hooks/useAutenticacao";

const Login = () => {
  const { entrar } = useAutenticacao();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");


  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = entrar(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
  };

  return (
    <div className="login">
      <form>
        <img
          className="mb-4"
          src={logo}
          alt="Airbnb-logo"
          width="200"
          height="100"
        />
        <h1 className="h3 mb-3 text-muted">Entre com sua conta</h1>

        <div className="input-login">
          <div className="form-floating">
            <input
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              type="email"
              value={email}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email </label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => [setSenha(e.target.value), setError("")]}
              type="password"
              value={senha}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
        </div>
        <label className="error-content">{error}</label>
        <button onClick={handleLogin} className="btn btn-primary" type="submit">
          Entrar
        </button>
        <Link to={"/esqueceu"}>Esqueceu a senha?</Link>
        <Link to={"/cadastrarConta"}>Não possui uma conta?</Link>
      </form>
    </div>
  );
};

export default Login;
