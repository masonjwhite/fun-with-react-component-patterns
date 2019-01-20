import React, { Component } from 'react';
import Toggle from './02-render-prop/Toggle';
import ToggleAlt from './03-render-prop-alt/Toggle-alt';
import { ThemeProvider } from './05-context-provider/ThemeProvider';
import { Heading, HeadingWithToggle } from './Heading';
import PokemonListContainer from './04-container-component/PokemonListContainer';

class App extends Component {
	render() {
		return (
			// Context provider
			<ThemeProvider>
				{/* Higher order components */}
				<HeadingWithToggle componentPattern="HOC's" />

				{/* Render prop */}
				<Toggle>
					{({ isToggled, toggle }) => (
						<Heading
							componentPattern="Render Props"
							isToggled={isToggled}
							toggle={toggle}
						/>
					)}
				</Toggle>

				{/* Render prop alternative example */}
				<ToggleAlt
					render={({ toggle, isToggled }) => (
						<Heading
							componentPattern="Render Props Alt."
							isToggled={isToggled}
							toggle={toggle}
						/>
					)}
				/>

				{/* Container component example */}
				<PokemonListContainer />
			</ThemeProvider>
		);
	}
}

export default App;
