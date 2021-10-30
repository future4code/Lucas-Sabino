import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { goToSignUp } from "../../routes/coordinator";
import logo from "../../assets/logo.PNG";
import { login } from "../../services/user";
import { ContainerLogin } from "./styled";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginPage = ({setRightButtonText}) => {
  useUnprotectedPage();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (ev) => {
    ev.preventDefault();
    login(form, clear, history, setRightButtonText, setIsLoading);
  };

  return (
    <div>
      <ContainerLogin>
        <img src={logo} />
        <form onSubmit={onSubmitForm}>
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
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            >
            {isLoading? <CircularProgress color={"inherit"} size={24} /> : <> Login </>}
          </Button>
        </form>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </ContainerLogin>
    </div>
  );
};

export default LoginPage;
