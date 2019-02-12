export default async pokeURL => {
	const response = await fetch(pokeURL);
   	const pokemonStats = await response.json();
	return pokemonStats;
};
