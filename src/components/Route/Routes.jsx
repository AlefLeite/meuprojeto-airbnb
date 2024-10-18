import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "../../pages/login/Login";
import Home from "../../pages/Home/Home";
import Esqueceu from "../../pages/EsqueceuSenha/Esqueceu";
import Favoritos from "../../pages/Favoritos/Favoritos";
import CadastrarConta from "../../pages/CadastrarConta/CadastrarConta";
import Usuarios from "../../pages/Usuarios/Usuarios";
import CadastroAcomodacao from "../../pages/CadastroAcomodacao/CadastroAcomodacao";
import Requisicoes from "../../pages/Requisicoes/Requisicoes";
import useAutenticacao from "../../hooks/useAutenticacao";

const RouteNavigation = () => {

  const Private = ({ Item, Admin }) => {
    const { user } = useAutenticacao();

    if (user === null || user === undefined) {
      return <Navigate to={"/login"} />
    }
    if (user === "admin") {
      return Admin ? <Admin /> : <Item />;
    }
    if (user === "user") {
      return <Item />;
    }

    return  <Navigate to={"/login"} />
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/esqueceu" element={<Esqueceu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrarConta" element={<CadastrarConta />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/favoritos" element={<Private Item={Favoritos} />} />
        <Route
          path="/cadastrarAcomodacao"
          element={<Private Item={CadastroAcomodacao} />}
        />
        <Route
          path="/cadastrosPendentes"
          element={<Private Admin={Requisicoes} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteNavigation;
