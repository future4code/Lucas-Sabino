import React from "react";
import error from "../../assets/erro.png";
import { ContainerError } from "./styled";

const ErrorPage = () => {
  return (
    <div>
      <ContainerError>
        <img src={error} alt="imagem de erro" />
        <h1>Erro 404 - Página não encontrada</h1>
      </ContainerError>
    </div>
  );
};

export default ErrorPage;
