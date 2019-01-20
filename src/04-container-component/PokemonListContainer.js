import React, { Component } from 'react';
import PokemonList from './PokemonList';

export default class PokemonListContainer extends Component {
	state = {
		type: null,
		pokemon: []
	};

	async componentDidMount() {
		// Fetch Pokemon from API
		const response = await fetch(
			'https://pokeapi.co/api/v2/type/6'
		);
		const { name, pokemon } = await response.json();

		this.setState({
			type: name
		});

		// Only display the first 10 pokemon for brevity's sake
		for (let i = 0; i < 10; i++) {
			await this.fetchPokemon(pokemon[i].pokemon.url);
		}
	}

	fetchPokemon = async pokeURL => {
		const response = await fetch(pokeURL);
		const pokemon = await response.json();
		this.setState({
			pokemon: [
				...this.state.pokemon,
				{
					id: pokemon.id,
					name: pokemon.name,
					height: pokemon.height,
					weight: pokemon.weight
				}
			]
		});
	};

	render() {
		const { type, pokemon } = this.state;
		return <PokemonList type={type} pokemon={pokemon} />;
	}
}
