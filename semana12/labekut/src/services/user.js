import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false)
      goToFeed(history);
      setRightButtonText('Logout')
    })
    .catch((err) => {
      setIsLoading(false)
      alert(err.response.data)
    });
};

export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear()
      setIsLoading(false)
      goToFeed(history)
      setRightButtonText('Logout')
    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
      alert('Algo deu errado');
    });
};
