import "./app.css";
import RouteNavigation from "./components/Route/Routes";
import { AutenticacaoProvider } from "./context/autenticacao";
import { FavoritosProvider } from "./context/FavoritosContext";

const App = () => {
  return (
    <>
      <AutenticacaoProvider>
          <FavoritosProvider>
            <RouteNavigation />
          </FavoritosProvider>
      </AutenticacaoProvider>
    </>
  );
};

export default App;
