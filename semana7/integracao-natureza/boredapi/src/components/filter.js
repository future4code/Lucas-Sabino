import axios from "axios";
import react from "react";

export default class Filter extends react.Component{
    state ={
        filtro: "",
    }

    trocaFiltro = (ev) => {
        this.setState({filtro: ev.target.value})
        axios.get(`http://www.boredapi.com/api/activity?type=${this.state.filtro}`)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    render(){
        return(
            <div>
                <select onChange={this.trocaFiltro}>
                    <option defaultValue>--</option>
                    <option value='education'>education</option>
                    <option value='recreational'>recreational</option>
                    <option value='social'>social</option>
                    <option value='diy'>diy</option>
                    <option value='charity'>charity</option>
                    <option value='cooking'>cooking</option>
                    <option value='relaxation'>relaxation</option>
                    <option value='music'>music</option>
                    <option value='busywork'>busywork</option>
                </select>
            </div>
        )
    }
}