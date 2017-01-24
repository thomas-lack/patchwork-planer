import { connect } from 'react-redux';
import { selectPattern } from '../actions';
import PatternGroup from '../components/bars/PatternGroup';

const mapStateToProps = (state) => {
	return {
		settings: {
			max: state.maxPattern,
			active: state.patternSelect
		}
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPatternClick: (id) => {
			dispatch(selectPattern(id));
		}
	};
};

const PatternSelect = connect(mapStateToProps, mapDispatchToProps)(PatternGroup);

export default PatternSelect;