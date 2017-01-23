// just copy the index html
import 'file-loader?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDom from 'react-dom';

import PatternSelect from './components/bars/PatternSelect';

ReactDom.render(
	<PatternSelect/>,
	document.getElementById('root')
);