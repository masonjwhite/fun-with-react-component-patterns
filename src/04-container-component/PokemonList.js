import React from 'react';
import { ThemeContext } from '../05-context-provider/ThemeProvider';

export default function PokemonList(props) {
	return (
		// We consume the context using a render prop!
		<ThemeContext.Consumer>
			{({ primaryColor, secondaryColor, fontSize }) => (
				<>
					<h1 style={{ color: primaryColor }}>
						list of {props.type} pokemon (using container
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
			)}
		</ThemeContext.Consumer>
	);
}
