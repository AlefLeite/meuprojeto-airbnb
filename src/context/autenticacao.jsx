import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AutenticacaoContext = createContext({});

export const AutenticacaoProvider = ({ children }) => {
  const url = "http://localhost:3000/usuarios/";

  const [users, setUsers] = useState();
  const [user, setUser] = useState();

  console.log(users)

  useEffect(() => {
    async function getUsuarios() {
      axios
        .get(url)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    }
    getUsuarios();
  }, []);

  const entrar = (email, senha) => {
    //Filtra os emails no banco de dados que forem iguais ao enviado e armazena na variavel
    const hasUser = users?.filter((user) => user.email === email);

    if (hasUser?.length){
        if (hasUser[0].email === email && hasUser[0].senha === senha && hasUser[0].permissao === "admin") {
            setUser("admin");
            return;
          } if(hasUser[0].email === email && hasUser[0].senha === senha && hasUser[0].permissao === "user"){
            setUser("user")
            return;
          }else {
            return "Email ou senha incorretos";
          }
    } else {
        return "Usuario não cadastrado"
    }
  };

  const cadastroUsuario = (email, senha, permissao) => {

    axios.post(url, { email, senha, permissao});
    return;
  }

  const logout = () =>{
    setUser(null)
    alert("Conta deslogada")
  }

  return (
    <AutenticacaoContext.Provider value={{user, entrar, logout, cadastroUsuario }}>
      {children}
    </AutenticacaoContext.Provider>
  );
};
