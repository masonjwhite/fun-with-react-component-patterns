import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList';
import fetchPokemons from './fetchPokemons';

export default function PokemonListContainerHooks() {
    // Pokemon type state (e.g. "flying")
    const [type, setType] = useState('');

    // List of pokemon state
    const [pokemon, setPokemon] = useState([]);

    // Using React's "useEffect" hook, we can fetch our Pokemon without using componentDidMount
    useEffect(() => {
        fetchPokemons(setType, setPokemon);
    }, []);
    
    // Pass our type and pokemon through to the presentational component
    return <PokemonList type={type} pokemon={pokemon} />;
}
