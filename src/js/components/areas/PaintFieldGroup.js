import React from 'react';
import PaintField from './PaintField';
import './styles/field.less';

const PaintFieldGroup = ({size, onColumnsChange, onRowsChange}) => {
	return (
		<div className="paintFieldContainer">
			<h3>Plan your patchwork pattern</h3>
			<table className="paintField">
				<tbody>
				{[...Array(size.rows)].map((x, i) =>
					<tr key={`row-${i + 1}`}>
						{[...Array(size.columns)].map((y, j) =>
							<PaintField key={`col-${i + 1}-${j + 1}`} />
						)}
					</tr>
				)}
				</tbody>
			</table>
			<div>
				Columns:
				<input type="number"
					onChange={(e) => onColumnsChange(e.target.value)}
					value={size.columns}
				/>
				Rows:
				<input
					type="number"
					onChange={(e) => onRowsChange(e.target.value)}
					value={size.rows}
				/>
			</div>
		</div>
	);
};

export default PaintFieldGroup;