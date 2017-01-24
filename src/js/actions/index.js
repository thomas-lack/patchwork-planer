export const selectPattern = (id) => {
	return {
		type: 'SELECT_PATTERN',
		id
	};
};

export const setMaxPattern = (max) => {
	return {
		type: 'SET_MAX_PATTERN',
		max
	};
};

export const setColumns = (columns) => {
	return {
		type: 'SET_COLUMNS',
		columns
	};
};

export const setRows = (rows) => {
	return {
		type: 'SET_ROWS',
		rows
	};
};