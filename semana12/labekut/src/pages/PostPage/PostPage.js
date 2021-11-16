import React from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {
  createComment,
  delLikeComment,
  likeComment,
} from "../../services/posts";
import useForm from "../../hooks/useForm";
import { Button, TextField } from "@material-ui/core";
import { Comments, ContainerComments } from "./styled";

const PostPage = () => {
  useProtectedPage();

  const body = { direction: 1 };
  const dislike = { direction: -1 };
  const [form, onChange, clear] = useForm({ body: "" });
  const params = useParams();
  const comments = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );

  const onSubmitComment = (ev) => {
    ev.preventDefault();
    createComment(form, clear, params.id);
  };

  const onLikeComment = (body, id) => {
    likeComment(body, id);
  };

  const onDelLikeComment = (id) => {
    delLikeComment(id);
  };

  const onDislikeComment = (dislike, id) => {
    likeComment(dislike, id);
  };

  const commentsList = comments.map((comment) => {
    return (
      <Comments key={comment.id}>
          <span>{comment.body} </span>
        <div>
          <span>{comment.voteSum} </span>
          <Button variant="contained" color="primary" onClick={() => onLikeComment(body, comment.id)}>
            Curtir
          </Button>
          <Button variant="contained" color="primary" onClick={() => onDelLikeComment(comment.id)}>Desfazer</Button>
          <Button variant="contained" color="primary" onClick={() => onDislikeComment(dislike, comment.id)}>
            Descurtir
          </Button>
        </div>
      </Comments>
    );
  });
  return (
    <div>
      <ContainerComments>
        <form onSubmit={onSubmitComment}>
          <TextField
            name={"body"}
            value={form.body}
            onChange={onChange}
            label={"Comentário"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </form>
      </ContainerComments>
      {commentsList}
    </div>
  );
};

export default PostPage;
