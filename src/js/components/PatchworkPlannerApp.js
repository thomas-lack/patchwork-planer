import React from 'react';
import PatternSelect from '../containers/PatternSelect';
import PatchworkField from '../containers/PatchworkField';


const PatchworkPlannerApp = () => (
	<div id="viewport">
		<PatternSelect />
		<PatchworkField />
	</div>
);

export default PatchworkPlannerApp;