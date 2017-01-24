import { combineReducers } from 'redux';
import patternSelect from './patternSelect';
import maxPattern from './maxPattern';
import patchworkSize from './patchworkSize';

const patchworkPatternApp = combineReducers({
	patternSelect,
	maxPattern,
	patchworkSize
});

export default patchworkPatternApp;