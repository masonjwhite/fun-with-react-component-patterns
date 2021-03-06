import fetchPokemonStats from './fetchPokemonStats';

export default async (setType, setPokemon) => {
    // Fetch Pokemon from API
    const response = await fetch(
        'https://pokeapi.co/api/v2/type/6'
    );

    const { name, pokemon } = await response.json();

    /* 
        - First 10 pokemon of the selected type for brevity's sake
        - This only returns names & stats URLs for pokemon
    */
    const firstTenOfType = pokemon.filter((p,i) => {
        return i < 10;
    });
    
    // Array to hold our stats
    const firstTenPokemonStats = [];

    // Loop through and fetch each individual pokemon's stats
    for(let i = 0; i < 10; i++) {
        const pokemonStats = await fetchPokemonStats(firstTenOfType[i].pokemon.url);
        firstTenPokemonStats.push(pokemonStats);
    }

	return {
		type: name,
		pokemons: firstTenPokemonStats
	}
}