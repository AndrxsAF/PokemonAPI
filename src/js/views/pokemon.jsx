import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Spinner from "../component/spinner.jsx";
import { getPokemon } from "../services/services.js";

import "../../styles/demo.css";

const Pokemon = () => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const pokemonGetFunct = async (url) => {
		try {
            setLoading(true)
			const res = await getPokemon(url);
			const dataJSON = await res.json();
			setPokemon(dataJSON)
            setLoading(false)
		} catch (err) {
			console.log(err);
		}
	};

    const checkType = () => {
        if (pokemon.types) {
            if (pokemon.types.length > 1) {
                return (
                    <p className=""><strong>Types:</strong> {actions.capitalizeFirstLetter(pokemon.types[0].type.name)} / {actions.capitalizeFirstLetter(pokemon.types[1].type.name)}.</p>
                )
            } else {
                return (
                    <p className=""><strong>Type:</strong> {actions.capitalizeFirstLetter(pokemon.types[0].type.name)}.</p>
                )
            }
        } else {
            return null
        }
    }

    const checkRegion = () => {
        if (pokemon.id <= 151) {
            return "Kanto region"
        } else if (pokemon.id <= 251) {
            return "Johto region"
        } else if (pokemon.id <= 386) {
            return "Hoenn region"
        } else if (pokemon.id <= 493) {
            return "Sinnoh region"
        } else if (pokemon.id <= 649) {
            return "Unova region"
        } else if (pokemon.id <= 721) {
            return "Kalos region"
        } else if (pokemon.id <= 809) {
            return "Alola region"
        } else if (pokemon.id <= 898) {
            return "Galar region"
        } else {
            return "Unknown"
        }
    }

    useEffect(() => {
        pokemonGetFunct(`https://pokeapi.co/api/v2/pokemon/${id}`)
    }, [id])

    console.log(pokemon)

    return (
        <div className="container-fluid">
            {loading ? (<Spinner/>) : (
                <div className="row container-fluid">
                    <img className="img-fluid col-4" src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                    <div className="container-fluid col">
                        <p className="fs-1">{actions.capitalizeFirstLetter(pokemon.name)}</p>
                        {checkType()}
                        <p className=""><strong>Height:</strong> {pokemon.height} inches tall.</p>
                        <p className=""><strong>Weight:</strong> {pokemon.weight} lbs.</p>
                        <p className=""><strong>Origin Region:</strong> {checkRegion()}.</p>
                    </div>
                    <nav className="mt-4 d-flex justify-content-center" aria-label="Page navigation example">
				    <ul className="pagination"> 
					    <Link className="text-decoration-none" to={`./${pokemon.id - 1}`}><li className={pokemon.id == 1 ? "page-item visually-hidden" : "page-item"}><button className="page-link" href="#">{`Previous Pokedex Entry ${pokemon.id - 1}`}</button></li></Link>
                        <li className="page-item page-link text-muted">current Pokedex index: {pokemon.id}</li>
					    <Link className="text-decoration-none" to={`./${pokemon.id + 1}`}><li className={pokemon.id == 898 ? "page-item visually-hidden" : "page-item"}><button className="page-link" href="#">{`Next Pokedex Entry ${pokemon.id + 1}`}</button></li></Link>
				    </ul>
			    </nav>
                </div>
                
            )}
        </div>
    )
}

export default Pokemon;