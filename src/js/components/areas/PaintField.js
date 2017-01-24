import React from 'react';
import { connect } from 'react-redux';

function select(state) {
	return { className: state.patternSelect };
}

class PaintField extends React.Component {
	constructor(props) {
		super(props);
		this.state = { className: '' };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ className: this.props.className });
	}

	render() {
		return (
			<td className={this.state.className}
				onClick={this.handleClick}
			></td>
		);
	}
}

export default connect(select)(PaintField);