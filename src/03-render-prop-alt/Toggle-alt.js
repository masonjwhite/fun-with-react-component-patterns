import { Component } from 'react';

export default class ToggleAlt extends Component {
	state = {
		isToggled: true
	};

	toggle = () => {
		this.setState({
			state: this.setState({
				isToggled: !this.state.isToggled
			})
		});
	};

	render() {
		return this.props.render({
			isToggled: this.state.isToggled,
			toggle: this.toggle
		});
	}
}
