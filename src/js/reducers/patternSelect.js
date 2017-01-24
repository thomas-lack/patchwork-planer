const patternSelect = (state = 'p1', action) => {
	switch (action.type) {
		case 'SELECT_PATTERN':
			return action.patternId;
		default:
			return state;
	}
};

export default patternSelect;