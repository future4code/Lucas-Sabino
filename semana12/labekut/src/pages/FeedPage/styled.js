import styled from "styled-components";

export const ContainerPosts = styled.div`
  box-shadow: 4px 5px lightslategray;
  border-radius: 20px;
  margin: 1vh 1vw;
`

export const User = styled.div`
  border-bottom: 1px solid black;
  align-self: center;
  justify-items: center;
`

export const CardPost = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 1vh auto;
  padding-left: 1vw;
  width: 20vw;
`;

export const DisplayPosts = styled.div`
  display: flex;
  flex-wrap: wrap;

  form {
    display: flex;
    flex-direction: column;
    margin: 6vh auto;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1vh auto;
    width: 40vw;
    gap: 1vh;
`

export const Reactions = styled.div`
  display: flex;
  justify-content: space-around;
`

export const LikeDislikeButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`