const patchworkSize = (state = {columns:6, rows:8}, action) => {
	switch (action.type) {
		case 'SET_COLUMNS':
			return Object.assign({}, state, {columns: action.columns});
		case 'SET_ROWS':
			return Object.assign({}, state, {rows: action.rows});
		default:
			return state;
	}
};

export default patchworkSize;