import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import CardsPokemon from "../component/CardsPokemon.jsx";
import { getPokemon, getSpecificPokemon } from "../services/services.js";

const mainUrl = "https://pokeapi.co/api/v2/pokemon/"
let list = []

export const Home = () => {
	const [pokemon, setPokemon] = useState([]);
	const [nextPage, setNextPage] = useState("");
	const [previousPage, setPreviousPage] = useState(null);
	const [pokemonList, setPokemonList] = useState([]);

	const pokemonGetFunct = async (url) => {
		try {
			const res = await getPokemon(url);
			const dataJSON = await res.json();
			setPokemon(dataJSON.results)
			setNextPage(dataJSON.next)
			setPreviousPage(dataJSON.previous)
		} catch (err) {
			console.log(err);
		}
	};

	const pokemonGetData = async (url) => {
		try {
			const res = await getPokemon(url);
			const dataJSON = await res.json();
			list.push(dataJSON)
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		pokemonGetFunct(mainUrl);
		list = []
		pokemon.forEach((pokes) => {
			getPokemon(pokes.url)
			.then((response) => response.json())
			.then((responseJson) => {
				list.push(responseJson)
			})
			.catch((err) => console.log(err));
		})
		setPokemonList(list)
	}, [nextPage]);

	console.log(pokemonList[2])

	return (
		<div className="text-center mt-5">
			{pokemon.length > 0
				? pokemon.map((poke, index) => (
						<CardsPokemon key={index} pokes={poke.name} />
				  ))
				: null}
		</div>
	);
};
