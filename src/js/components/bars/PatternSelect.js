import React from 'react';
import Pattern from './Pattern';

class PatternSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 'p1',
			patternMax: 5
		};
	}

	render() {
		return (
			<div>
				<h3>Select a pattern</h3>
				{[...Array(this.state.patternMax)].map((x, i) =>
					<Pattern
						key={'p' + (i + 1)}
						image={'p' + (i + 1)}
						active={this.state.active === 'p' + (i + 1)}
					/>
				)}
			</div>
		);
	}
}

export default PatternSelect;