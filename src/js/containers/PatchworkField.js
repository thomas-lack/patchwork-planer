import { connect } from 'react-redux';
import { setColumns, setRows } from '../actions';
import PaintFieldGroup from '../components/areas/PaintFieldGroup';

const mapStateToProps = (state) => {
	return {
		size: {
			columns: state.patchworkSize.columns,
			rows: state.patchworkSize.rows
		}
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onColumnsChange: (columns) => {
			dispatch(setColumns(columns));
		},
		onRowsChange: (rows) => {
			dispatch(setRows(rows));
		}
	};
};

const PatchworkField = connect(mapStateToProps, mapDispatchToProps)(PaintFieldGroup);

export default PatchworkField;