import axios from "axios";
import { useEffect, useState } from "react";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})

useEffect(() => {
    const pegaPokemon = (pokeName) => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
            setPokemon(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    };
    pegaPokemon(props.pokemon);
}, [pokemon]);

return (
    <div>
    <p>{pokemon.name}</p>
    <p>{pokemon.weight} Kg</p>
    {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
    {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    )}
    </div>
);
};


export default PokeCard;
