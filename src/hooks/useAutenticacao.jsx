import { useContext } from "react";
import { AutenticacaoContext } from "../context/autenticacao";

const useAutenticacao = () =>{
    const aaa = useContext(AutenticacaoContext);

    return aaa;
};


export default useAutenticacao;