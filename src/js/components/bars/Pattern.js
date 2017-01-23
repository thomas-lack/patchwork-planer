import React from 'react';

import './styles/pattern.less';
//import img from '../../../img/pattern-1.jpg';

const Pattern = (props) => {
	// <img src={img} width="100" height="100" />
	return (
		<div className={`pattern ${props.image}`}>
		</div>
	);
};

export default Pattern;