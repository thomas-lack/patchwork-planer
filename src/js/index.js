import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import patchworkPatternApp from './reducers';
import PatchworkPlannerApp from './components/PatchworkPlannerApp';
// import index.html to import webpack bundling
import 'file-loader?name=[name].[ext]!../index.html';

let store = createStore(patchworkPatternApp);

ReactDom.render(
	<Provider store={store}>
		<PatchworkPlannerApp />
	</Provider>,
	document.getElementById('root')
);

window.store = store;