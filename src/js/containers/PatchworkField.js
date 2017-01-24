import { connect } from 'react-redux';
import { setColumns, setRows } from '../actions';
import PaintFieldGroup from '../components/areas/PaintFieldGroup';

const mapStateToProps = (state) => {
	return {
		size: {
			columns: state.patchworkSize.columns,
			rows: state.patchworkSize.rows
		},
		pattern: state.patternSelect
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onColumnsChange: (columns) => {
			dispatch(setColumns(Math.max(1, parseInt(columns))));
		},
		onRowsChange: (rows) => {
			dispatch(setRows(Math.max(1, parseInt(rows))));
		}
	};
};

const PatchworkField = connect(mapStateToProps, mapDispatchToProps)(PaintFieldGroup);

export default PatchworkField;