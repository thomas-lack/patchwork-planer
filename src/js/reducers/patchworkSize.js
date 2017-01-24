const patchworkSize = (state = {columns:5, rows:10}, action) => {
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