import React from "react";
import { Button } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { CardPost, ContainerPosts, DisplayPosts, Form, LikeDislikeButtons, Reactions, User } from "./styled";
import { goToPost } from "../../routes/coordinator";
import { useHistory } from "react-router";
import { createPost, delLikePost, likePost } from "../../services/posts";
import useForm from "../../hooks/useForm";
import { TextField } from "@material-ui/core";
import avatar from "../../assets/avatar.svg";
import likeIcon from '../../assets/like.svg'
import dislikeIcon from '../../assets/dislike.svg'
import indiferentIcon from '../../assets/indiferent.svg'


const FeedPage = () => {
  useProtectedPage();

  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const history = useHistory();
  const posts = useRequestData([], `${BASE_URL}/posts`);
  const like = { direction: +1 };
  const dislike = { direction: -1 };
  const onClickCard = (id) => {
    goToPost(history, id);
  };

  const onSubmitForm = (ev) => {
    ev.preventDefault();
    createPost(form, clear);
  };

  const onClickDel = (id) => {
    delLikePost(id)
  }

  const onClickLike = (like, id) => {
    likePost(like, id, history);
  };

  const onClickDislike = (dislike, id) => {
    likePost(dislike, id);
  };

  const postsCards = posts.map((post) => {
    return (
      <ContainerPosts>
        <CardPost key={post.id} onClick={() => onClickCard(post.id)}>
          <User>
            <img src={avatar} width="30vw" />
            <span> {post.username}</span>
          </User>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <Reactions>
            <span>Curtidas: {post.voteSum}</span>
            <span>Comentários: {post.commentCount}</span>
          </Reactions>
        </CardPost>
        <LikeDislikeButtons>
          <button onClick={() => onClickLike(like, post.id)}><img src={likeIcon} /></button>
          <button onClick={() => onClickDel(post.id)}><img src={indiferentIcon} /></button>
          <button onClick={() => onClickDislike(dislike, post.id)}>
          <img src={dislikeIcon} />
          </button>
        </LikeDislikeButtons>
      </ContainerPosts>
    );
  });
  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Título"}
          required
          autoFocus
        />
        <TextField
          name={"body"}
          value={form.body}
          onChange={onChange}
          label={"Postagem"}
          required
          autoFocus
        />
        <Button type="submit" variant="contained" color="primary">
          Criar Post
        </Button>
      </Form>
      <DisplayPosts>{postsCards}</DisplayPosts>
    </div>
  );
};

export default FeedPage;
