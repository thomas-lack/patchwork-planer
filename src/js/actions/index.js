export const selectPattern = (patternId) => {
	return {
		type: 'SELECT_PATTERN',
		patternId
	};
};

export const setMaxPattern = (max) => {
	return {
		type: 'SET_MAX_PATTERN',
		max
	};
};