export default async pokeURL => {
	const response = await fetch(pokeURL);
	const pokemon = await response.json();
	return pokemon;
};
