import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import CardsPokemon from "../component/CardsPokemon.jsx";
import CardsRegion from "../component/CardsRegion.jsx";
import { getPokemon, getSpecificPokemon } from "../services/services.js";
const regionUrl = "https://pokeapi.co/api/v2/version-group/"

export const Home = (props) => {
	
	const [urlState, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
	const [pokemon, setPokemon] = useState([]);
	const [nextPage, setNextPage] = useState("");
	const [previousPage, setPreviousPage] = useState(null);
	const [pokedexNumbers, setPokedexNumbers] = useState([1, 20])
	const [region, setRegion] = useState([])
	const [nextButton, setNextButton] = useState(false);
	const [previousButton, setPreviousButton] = useState(false);

	const buttonNextPage = () => {
		setNextButton(true)
		setPokedexNumbers(pokedexNumbers.map((numbers) => numbers + 20))
		console.log(pokedexNumbers)
		setUrl(nextPage)
	}
	
	const buttonPreviousPage = () => {
		setPreviousButton(true)
		setPokedexNumbers(pokedexNumbers.map((numbers) => numbers - 20))
		console.log(pokedexNumbers)
		setUrl(previousPage)
	}

	const pokemonGetFunct = async (url) => {
		try {
			const res = await getPokemon(url);
			const dataJSON = await res.json();
			setPokemon(dataJSON.results)
			setNextPage(dataJSON.next)
			setPreviousPage(dataJSON.previous)
			setPreviousButton(false)
			setNextButton(false)
		} catch (err) {
			console.log(err);
		}
	};

	const regionGetFunct = async (url) => {
		try {
			const res = await getPokemon(url);
			const dataJSON = await res.json();
			setRegion(dataJSON.results)
		} catch (err) {
			console.log(err);
		}
	};
		
	useEffect(() => {
		pokemonGetFunct(urlState);
	}, [urlState]);

	regionGetFunct(regionUrl)

	return (
		<div className="mt-3">
			<p className="ps-5 fs-1 m-0">Pokémon:</p>
			<div className="m-0 d-flex overflow-auto p-2">
				{pokemon.length > 0
				? pokemon.map((poke, index) => (
						<CardsPokemon key={index} pokes={poke.name} url={poke.url} />
				  ))
				: null}
			</div>
			<nav className="mt-4 d-flex justify-content-center" aria-label="Page navigation example">
				<ul className="pagination">
					<li className={pokedexNumbers[0] == 1 ? "page-item visually-hidden" : "page-item"}><button onClick={buttonPreviousPage} disabled={previousButton} className="page-link" href="#">{previousButton ? (<div className='spinner-border'/>) : "Previous"}</button></li>
					<li className="page-item page-link text-muted">current Pokedex numbers: {`${pokedexNumbers[0]} - ${pokedexNumbers[1]}`}</li>
					<li className={pokedexNumbers[1] == 900 ? "page-item visually-hidden" : "page-item"}><button onClick={buttonNextPage} className='page-link' disabled={nextButton} href='#'>{nextButton ? (<div className='spinner-border'/>) : "Next"}</button></li>
				</ul>
			</nav>
			<p className="ps-5 fs-1 mt-3">Games:</p>
			<div className="m-0 d-flex overflow-auto p-2">
				{region.length > 0
				? region.map((region, index) => (
						<CardsRegion key={index} region={region.name} url={region.url} />
				  ))
				: null}
			</div>
		</div>
	);
};

Home.propTypes = {
    
}