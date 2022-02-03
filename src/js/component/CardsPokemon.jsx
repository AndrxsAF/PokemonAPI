import PropTypes from "prop-types";
import { getPokemon, getSpecificPokemon } from "../services/services.js";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext"

const CardsPokemon = (props) => {

    const { store, actions } = useContext(Context)
    const [pokemonList, setPokemonList] = useState({});

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
                    <p className="card-text mb-1"><strong>Types:</strong> {actions.capitalizeFirstLetter(pokemonList.types[0].type.name)} / {actions.capitalizeFirstLetter(pokemonList.types[1].type.name)}.</p>
                )
            } else {
                return (
                    <p className="card-text mb-1"><strong>Type:</strong> {actions.capitalizeFirstLetter(pokemonList.types[0].type.name)}.</p>
                )
            }
        } else {
            return null
        }
    }

    const checkFunc = () => {
        actions.addPokeFav(props.pokes, {name: props.pokes, img: pokemonList.sprites ? pokemonList.sprites.front_default : null, dexEntry: pokemonList.id, check: actions.checker(props.pokes)})
    }

    useEffect(() => {
        pokemonGetFunct(props.url)
    }, [props.url])

    return (
        <div className="col-lg-3 col-md-4 col-sm-12 p-2">
            <div className="card">
                <img src={pokemonList.sprites ? pokemonList.sprites.other["official-artwork"].front_default : null} className="card-img-top img-fluid" alt={props.pokes}/>
                <div className="card-body bg-light">
                    <h5 className="card-title fs-3 text-center">{actions.capitalizeFirstLetter(props.pokes)}</h5>
                     {checkType()}
                    <p className="card-text mb-1"><strong>Height:</strong> {pokemonList.height} inches tall.</p>
                    <p className="card-text"><strong>Weight:</strong> {pokemonList.weight} lbs.</p>
                    <div className="container-fluid d-flex justify-content-between p-0">
                        <button className="btn btn-primary d-flex justify-content-center align-items-center">Pokedex description</button>
                        <input checked={store.favorite[props.pokes]} onChange={() => checkFunc()} type="checkbox" className="btn-check" name={props.pokes} id={`${props.pokes}-check`}/>
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