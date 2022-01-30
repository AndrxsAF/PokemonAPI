import PropTypes from "prop-types";
import { getPokemon, getSpecificPokemon } from "../services/services.js";
import React, { useEffect, useState } from "react";

const CardsPokemon = (props) => {

    const [pokemonList, setPokemonList] = useState({});

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

    const pokemonGetFunct = async (url) => {
		try {
			const res = await getPokemon(url);
			const dataJSON = await res.json();
			setPokemonList(dataJSON)
		} catch (err) {
			console.log(err);
		}
	};

    const checkType = () => {
        if (pokemonList.types) {
            if (pokemonList.types.length > 1) {
                return (
                    <p className="card-text mb-1"><strong>Types:</strong> {capitalizeFirstLetter(pokemonList.types[0].type.name)} / {capitalizeFirstLetter(pokemonList.types[1].type.name)}.</p>
                )
            } else {
                return (
                    <p className="card-text mb-1"><strong>Type:</strong> {capitalizeFirstLetter(pokemonList.types[0].type.name)}.</p>
                )
            }
        } else {
            return null
        }
    }

    useEffect(() => {
        pokemonGetFunct(props.url)
    }, [props.url])
		
    return (
        <div className="col-md-3 col-sm-12 p-4">
            <div className="card">
                <img src={pokemonList.sprites ? pokemonList.sprites.other["official-artwork"].front_default : null} className="card-img-top img-fluid" alt={props.pokes}/>
                <div className="card-body bg-light">
                    <h5 className="card-title fs-3 text-center">{capitalizeFirstLetter(props.pokes)}</h5>
                     {checkType()}
                    <p className="card-text mb-1"><strong>Height:</strong> {pokemonList.height} inches tall.</p>
                    <p className="card-text"><strong>Weight:</strong> {pokemonList.weight} lbs.</p>
                    <div className="container-fluid d-flex justify-content-between p-0">
                        <a href="#" className="btn btn-primary d-flex justify-content-center align-items-center">Pokedex description</a>
                        <input type="checkbox" className="btn-check" name={props.pokes} id={`${props.pokes}-check`}/>
                        <label className="btn btn-outline-warning p-1" htmlFor={`${props.pokes}-check`}><img src="https://img.icons8.com/color/40/000000/star-pokemon.png"/></label>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

CardsPokemon.propTypes = {
    pokes: PropTypes.string,
    url: PropTypes.string
}

export default CardsPokemon