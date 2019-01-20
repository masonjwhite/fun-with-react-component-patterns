import React from 'react';
import withToggle from './01-higher-order-component/withToggle';

export const Heading = props => (
	<>
		{props.isToggled && (
			<p>Toggle with {props.componentPattern}!</p>
		)}
		<button onClick={props.toggle}>Hide/Show</button>
	</>
);

// Wrap Heading in a HOC
export const HeadingWithToggle = withToggle(Heading);
