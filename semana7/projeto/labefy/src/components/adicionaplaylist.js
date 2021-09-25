import axios from "axios";
import react from "react";

export default class CriaPlaylist extends react.Component{

    state = {
        playlistName: ""
    }
    
    nomePlaylist = (ev) => {
        this.setState({playlistName: ev.target.value})
    }

    novaPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.playlistName,
        }
        const headers = {
            headers:{
                Authorization: "lucas-sabino-maryam"
            }
        }
        axios.post(url, body, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }
    
    render(){
        return(
            <div>
                <input placeholder="Nome da playlist" onChange={this.nomePlaylist}></input>
                <button onClick={this.novaPlaylist}>Adicionar</button>
            </div>
    )
}
}