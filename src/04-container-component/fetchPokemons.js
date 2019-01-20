export default async () => {
	const response = await fetch(
		'https://pokeapi.co/api/v2/type/6'
	);
	const { name, pokemon } = await response.json();

	return {
		typeName: name,
		pokemon
	};
};
