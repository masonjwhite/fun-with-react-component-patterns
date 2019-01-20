import React, { Component } from 'react';

const withToggle = ComponentToWrap => {
	class ComponentWithToggle extends Component {
		state = {
			isToggled: true
		};

		toggle = () => {
			this.setState({
				isToggled: !this.state.isToggled
			});
		};

		render() {
			return (
				<ComponentToWrap
					{...this.props}
					isToggled={this.state.isToggled}
					toggle={this.toggle}
				/>
			);
		}
	}

	return ComponentWithToggle;
};

export default withToggle;
