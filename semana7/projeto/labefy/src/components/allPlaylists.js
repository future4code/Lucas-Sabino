import react from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerLista = styled.div`
    display: flex;
    border: 1px solid black;
    width: 400px;
    margin: 5px;
    justify-content: space-between;
    align-items: center;
`

export default class AllPlaylists extends react.Component{
    state = {
        lista: [],
        musicas: [],
        nomeMusica: "",
        nomeArtista: "",
        urlMusica: "",
    }

    mostraPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers:{
                Authorization: "lucas-sabino-maryam"
            }
        })
        .then((res) => {
            this.setState({lista: res.data.result.list})
        }).catch((err)=>{
            console.lor(err.response.data)
        })
    }
    
    componentDidMount() {
        this.mostraPlaylists()
    }
    componentDidUpdate() {
        this.mostraPlaylists()
    }

    apagaPlaylist(id){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: "lucas-sabino-maryam"
            }
        }).then((res)=>{
            alert("Playlist apagada")
            this.mostraPlaylists()
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    conteudoPlaylist(id){
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: "lucas-sabino-maryam"
            }
        }).then((res) => {
            this.setState({musicas: res.data.result.tracks})
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    adicionaMusica = (id) => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            body: {
                name: this.state.nomeMusica,
                artist: this.state.nomeArtista,
                url: this.state.urlMusica
            }
        },
        {
            headers: {
                Authorization: "lucas-sabino-maryam"
            },
        }).then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(id)
            console.log(this.state.nomeArtista)
            console.log(this.state.nomeMusica)
            console.log(this.state.urlMusica)
            console.log(err.response.data)
        }) 
    }
    nomeDaMusica = (ev) => {
        this.setState({nomeMusica: ev.target.value})
    }
    nomeDoArtista = (ev) => {
        this.setState({nomeArtista: ev.target.value})
    }
    urlDaMusica = (ev) => {
        this.setState({urlMusica: ev.target.value})
    }
    
    render(){
        const listaMusicas = this.state.musicas.map((music)=>{
            return (
                <div>
                    <p key={music.id}>{music.artist} - {music.name}</p>
                </div>
            )
        })
        const playlistList = this.state.lista.map((nome)=>{
            return(
                <ContainerLista onClick={() => {this.conteudoPlaylist(nome.id)}}>
                    <p key={nome.id}>{nome.name}</p>
                    <button onClick={() => {this.apagaPlaylist(nome.id)}}>X</button>
                    <button onClick={() => {this.adicionaMusica(nome.id)}}>Adicionar Musica</button>
                </ContainerLista>
            )
        })
        return(
            <div>
                <button onClick={this.mostraPlaylists}>Mostrar playlists</button>
                <br />
                <br />
                <input placeholder="Nome da Musica" onChange={this.nomeDaMusica}></input>
                <input placeholder="Nome do Artista" onChange={this.nomeDoArtista}></input>
                <input placeholder="URL da Musica" onChange={this.urlDaMusica}></input>
                <br />
                {playlistList}
                {listaMusicas}
            </div>
        )
    }
}