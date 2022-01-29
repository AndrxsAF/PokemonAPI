export const getPokemon = (url) =>
fetch(url, {
    method: "GET",
});

export const getSpecificPokemon = (url) =>
fetch(`https://pokeapi.co/api/v2/pokemon/${url}`, {
    method: "GET",
});
