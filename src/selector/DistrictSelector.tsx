import { useEffect, useState } from 'react';
import { District, DistrictsSelectorPropsType } from '../types';

export default function DistrictSelector({
	onChangeHandler,
	classes,
	disabled = false,
	divisionId,
}: DistrictsSelectorPropsType) {
	const [districts, setDistricts] = useState<District[]>([]);

	useEffect(() => {
		fetchDistricts();
	}, [divisionId]);

	const fetchDistricts = async () => {
		try {
			const res = await fetch('data/districts.json', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			const data = await res.json();
			if (divisionId) {
				setDistricts(
					data?.filter(
						(item: District) => item.division_id === divisionId?.toString()
					)
				);
			} else {
				setDistricts(data);
			}
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
			{districts.map((district, index) => (
				<option key={index} value={JSON.stringify(district)}>
					{district.name}
				</option>
			))}
		</select>
	);
}
