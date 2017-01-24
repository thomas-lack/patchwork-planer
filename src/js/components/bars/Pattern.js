import React from 'react';

import './styles/pattern.less';

// import image files to enable webpack bundling
import '../../../img/pattern-1.jpg';
import '../../../img/pattern-2.jpg';
import '../../../img/pattern-5.jpg';
import '../../../img/pattern-7.jpg';
import '../../../img/pattern-8.jpg';

const Pattern = (props) => {
	const activeClass = (props.active === true) ? 'active' : '';
	return (
		<div
			className={`pattern ${props.image} ${activeClass}`}
			onClick={() => props.onClick(props.id)}
		>
		</div>
	);
};

export default Pattern;