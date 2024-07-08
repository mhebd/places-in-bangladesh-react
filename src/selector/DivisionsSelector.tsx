import { useEffect, useState } from 'react';
import { Division, DivisionsSelectorPropsType } from '../types';

export default function DivisionsSelector({
	onChangeHandler,
	classes,
	disabled = false,
}: DivisionsSelectorPropsType) {
	const [divisions, setDivisions] = useState<Division[]>([]);

	useEffect(() => {
		fetchDivisions();
	}, []);

	const fetchDivisions = async () => {
		try {
			const res = await fetch('data/divisions.json', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			const data = await res.json();
			setDivisions(data);
		} catch (error) {
			console.error('Error fetching divisions:', error);
		}
	};

	return (
		<select
			onChange={(event) => onChangeHandler(JSON.parse(event.target.value))}
			className={classes}
			disabled={disabled}
		>
			{divisions.map((division, index) => (
				<option key={index} value={JSON.stringify(division)}>
					{division.name}
				</option>
			))}
		</select>
	);
}
