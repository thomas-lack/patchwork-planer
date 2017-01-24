// just copy the index html
import 'file-loader?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import patchworkPatternApp from './reducers';
import PatternSelect from './components/bars/PatternSelect';

let store = createStore(patchworkPatternApp);

ReactDom.render(
	<Provider store={store}>
		<PatternSelect/>
	</Provider>,
	document.getElementById('root')
);

window.store = store;