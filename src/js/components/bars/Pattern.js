import React from 'react';

import './styles/pattern.less';

import '../../../img/pattern-1.jpg';
import '../../../img/pattern-2.jpg';
import '../../../img/pattern-5.jpg';
import '../../../img/pattern-7.jpg';
import '../../../img/pattern-8.jpg';

const Pattern = (props) => {
	const activeClass = (props.active === true) ? 'active' : '';
	return (
		<div className={`pattern ${props.image} ${activeClass}`}>
		</div>
	);
};

export default Pattern;