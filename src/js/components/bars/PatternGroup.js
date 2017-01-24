import React from 'react';
import Pattern from './Pattern';

const PatternGroup = ({settings, onPatternClick}) => {
	return (
		<div className="patternSelect">
			<h3>Select a pattern</h3>
			{[...Array(settings.max)].map((x, i) =>
				<Pattern
					key={'p' + (i + 1)}
					image={'p' + (i + 1)}
					id={'p' + (i + 1)}
					active={settings.active === 'p' + (i + 1)}
					onClick={onPatternClick}
				/>
			)}
		</div>
	);
};

export default PatternGroup;