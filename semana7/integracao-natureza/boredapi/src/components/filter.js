import axios from "axios";
import react from "react";
import App from "../App";

export default class Filter extends react.Component{

    trocaFiltro = (ev) => {
        axios.get(`http://www.boredapi.com/api/activity?type=${ev.target.value}`)
        .then((res) => {
            console.log(res)
            this.setState(<App />)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    render(){
        return(
            <div>
                <select onChange={this.trocaFiltro}>
                    <option defaultValue>Quer uma atividade específica?</option>
                    <option value='education'>Education</option>
                    <option value='recreational'>Recreational</option>
                    <option value='social'>Social</option>
                    <option value='diy'>Diy</option>
                    <option value='charity'>Charity</option>
                    <option value='cooking'>Cooking</option>
                    <option value='relaxation'>Relaxation</option>
                    <option value='music'>Music</option>
                    <option value='busywork'>Busywork</option>
                </select>
            </div>
        )
    }
}