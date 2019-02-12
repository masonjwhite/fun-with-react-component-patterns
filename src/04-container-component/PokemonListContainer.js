import React, { Component } from 'react';
import PokemonList from './PokemonList';
import fetchPokemons from './fetchPokemons'

export default class PokemonListContainer extends Component {
	state = {
		type: null,
		pokemons: []
	};

	async componentDidMount() {
		// Fetch Pokemon from API
		const {type, pokemons} = await fetchPokemons();

		this.setState({
			type,
			pokemons
		});
	}

	render() {
		const { type, pokemons } = this.state;
		return <PokemonList type={type} pokemon={pokemons} />;
	}
}
