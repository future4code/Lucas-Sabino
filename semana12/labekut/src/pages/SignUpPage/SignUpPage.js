import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { ContainerSignUp } from "./styled";
import { CircularProgress } from "@material-ui/core";

const SignUpPage = ({setRightButtonText}) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (ev) => {
    ev.preventDefault();
    console.log(form);
    signUp(form, clear, history, setRightButtonText, setIsLoading);
  };

  return (
    <div >
      <ContainerSignUp>
        <h1>Cadastre-se</h1>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
            text="Senha deve possuir no mínimo 8 e no máximo 30 caracteres"
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            {isLoading? <CircularProgress color={"inherit"} size={24} /> : <> Cadastrar </>}
          </Button>
        </form>
      </ContainerSignUp>
    </div>
  );
};

export default SignUpPage;
