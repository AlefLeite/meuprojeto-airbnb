import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../airbnb (1).svg";
import "@mdi/font/css/materialdesignicons.css";
import "./navbar.css";
import useAutenticacao from "../../hooks/useAutenticacao";

const Navbar = ({ dados }) => {
  const [idClicado, setIdClicado] = useState(dados);
  const navBarMobile = [
    {
      id: 1,
      nome: "Explorar",
      icon: "fs-3 mdi mdi-compass d-flex flex-column text-center",
      redirect: "/",
    },
    {
      id: 2,
      nome: "Favoritos",
      icon: "fs-3 mdi mdi-heart d-flex flex-column text-center",
      redirect: "/favoritos",
    },
    {
      id: 3,
      nome: "Usuarios",
      icon: "fs-3 mdi mdi-account-circle d-flex flex-column text-center",
      redirect: "/usuarios",
    },
  ];

  const { user, logout } = useAutenticacao();

  const handleClick = (id) => {
    setIdClicado(id);
  };

  return (
    <div>
      <nav
        style={{ position: "fixed", top: 0, zIndex: "6" }}
        className="nav-topo"
      >
        <div className="container">
          <div className="col-6 d-flex justify-content-center justify-content-sm-start align-itens-center">
            <img alt="Logo-Airbnb" src={logo} className="logo"></img>
          </div>
          <div className="d-none d-sm-flex align-itens-center justify-content-end col-6">
            <Link to="/cadastrarAcomodacao" className="link-especial">
              Seja um anfitrião
            </Link>
            <Link to="/" className="mx-2 icon-nav">
              <i className="mdi mdi-web"></i>
            </Link>
            <div className="dropdown">
              <button
                className="mx-2 button-login dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fs-6 mdi mdi-menu"></i>
                <i className="fs-3 position-relative mdi mdi-account-circle"></i>
              </button>
              <ul className="py-2 mt-2 dropdown-menu">
                <li>
                  <Link
                    className="fw-bold dropdown-item p-2 px-3"
                    to={"/cadastrarConta"}
                  >
                    Cadastre-se
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item p-2 px-3" to={"/login"}>
                    Entrar
                  </Link>
                </li>
                {user === null || user === undefined ? (
                  ""
                ) : (
                  <li>
                    <Link
                      onClick={() => logout()}
                      className="dropdown-item p-2 px-3"
                      to={"/"}
                    >
                      Logout
                    </Link>
                  </li>
                )}

                <li>
                  <hr className="dropdown-divider p-2 px-3"></hr>
                </li>
                <li>
                  <Link
                    className="dropdown-item p-2 px-3"
                    to="/cadastrarAcomodacao"
                  >
                    Hospede em sua acomodação
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item p-2 px-3"
                    to="/cadastrarAcomodacao"
                  >
                    Hospede uma expriência
                  </Link>
                </li>
                {user === "admin" ? (
                  <li>
                    <Link
                      className="dropdown-item p-2 px-3"
                      to="/cadastrosPendentes"
                    >
                      Requisições
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                <li>
                  <Link className="dropdown-item p-2 px-3" to="/favoritos">
                    Favoritos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav
        id="mobile"
        className="d-sm-none bg-white fixed-bottom d-flex align-items-center justify-content-between"
      >
        {navBarMobile.map((dados, index) => (
          <Link
            key={index}
            onClick={() => {
              handleClick(dados.id);
            }}
            to={dados.redirect}
            className={dados.id == idClicado ? "active" : " "}
          >
            <i className={dados.icon}></i>
            <span>{dados.nome}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
