import { Component } from 'react';

export default class Toggle extends Component {
	state = {
		isToggled: true
	};

	toggle = () => {
		this.setState({
			isToggled: !this.state.isToggled
		});
	};

	render() {
		const { children } = this.props;

		// Call children as a function passing in what we want to reuse
		return children({
			toggle: this.toggle,
			isToggled: this.state.isToggled
		});
	}
}
