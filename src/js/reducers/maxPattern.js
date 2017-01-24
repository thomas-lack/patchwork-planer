const maxPattern = (state = 5, action) => {
	switch (action.type) {
		case 'SET_MAX_PATTERN':
			return action.max;
		default:
			return state;
	}
};

export default maxPattern;