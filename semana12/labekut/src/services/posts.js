import axios from "axios";
import { BASE_URL } from "../constants/urls";

const refreshPage = () => {
    window.location.reload()
};

export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res)=>{
        clear()
        refreshPage()
    }).catch((err) => {
        console.log(err.response)
    })
}

export const createComment = (body, clear, id) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        clear()
        refreshPage()
    }).catch((err) => {
        console.log(err)
    })
}

export const likePost = (body, id) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        refreshPage()
    }).catch((err) => {
        console.log(err.response)
    })
}

export const delLikePost = (id) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        refreshPage()
    }).catch((err) => {
        console.log(err)
    })
}

export const likeComment = (body, id) => {
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        refreshPage()
    }).catch((err) => {
        console.log(err)
    })
}

export const delLikeComment = (id) => {
    axios.delete(`${BASE_URL}/Comments/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        refreshPage()
    }).catch((err) => {
        console.log(err)
    })
}