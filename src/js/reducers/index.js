import { combineReducers } from 'redux';
import patternSelect from './patternSelect';
import maxPattern from './maxPattern';

const patchworkPatternApp = combineReducers({
	patternSelect,
	maxPattern
});

export default patchworkPatternApp;