import React, {useContext} from 'react';
import { ThemeContext } from '../05-context-provider/ThemeProvider';

export default function PokemonList(props) {
	// Let's consume our theme context using the new "useContext" hook!
	const { primaryColor, secondaryColor, fontSize } = useContext(ThemeContext);

	return (
		<>
			<h1 style={{ color: primaryColor }}>
				list of {props.type} pokemon (using hooks container
				component):
			</h1>
			<ul style={{ color: secondaryColor, fontSize }}>
				{props.pokemon.map((poke, i) => (
					<li key={i}>
						<h2>
							{`# ${poke.id}`} {poke.name}
						</h2>
						<p>Weight: {poke.weight} pounds</p>
						<p>Height: {poke.height} feet</p>
					</li>
				))}
			</ul>
		</>
	);
}
