import React from 'react';
import Pattern from './Pattern';

const PatternSelect = () => {
	return (
		<div>
			<h3>Select a pattern</h3>
			<Pattern image="p1" />
			<Pattern image="p2" />
		</div>
	);
};

export default PatternSelect;