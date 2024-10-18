import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../airbnb (1).svg";
import "./styles.css";
import useAutenticacao from "../../hooks/useAutenticacao";

export default function CadastrarConta() {
  const [email, setEmail] = useState("");
  const [confEmail, setConfEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [permissao] = useState("user");
  const navigate = useNavigate();

  const { cadastroUsuario } = useAutenticacao();

  const handleSignup = () => {
    if (!email | !confEmail | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== confEmail) {
      setError("Os email precisam ser iguais");
      return;
    }

    const res = cadastroUsuario(email, senha, permissao);
    if (res) {
      setError(res);
      return;
    }

    alert("Cadastro feito com sucesso");
    navigate("/");
  };

  return (
    <div
      style={{
        flex: 1,
        height: "100vh",
        width: "100%",
        z: "4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <form>
          <img
            className="mb-4"
            src={logo}
            alt="Airbnb-logo"
            width="200"
            height="100"
          />
          <h1 className="h3 mb-3 text-muted">Cadastrar-se</h1>

          <div className="input-login">
            <div className="form-floating">
              <input
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                type="email"
                value={email}
                className="form-control"
                id="floatingInput1"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                onChange={(e) => [setConfEmail(e.target.value), setError("")]}
                type="email"
                value={confEmail}
                className="form-control"
                id="floatingInput2"
                placeholder="Confirme seu email"
              />
              <label htmlFor="floatingPassword">Confirme seu email</label>
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
              <label htmlFor="floatingPassword">Crie sua senha</label>
            </div>
          </div>

          <label className="error-content">{error}</label>
          <button
            onClick={handleSignup}
            className="btn btn-primary"
            type="button"
          >
            Cadastrar-se
          </button>
          <Link to={"/"}>Continuar sem Login</Link>
        </form>
      </div>
    </div>
  );
}
