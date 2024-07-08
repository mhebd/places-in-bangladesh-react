import { useEffect, useState } from 'react';
import { SubDistrict, SubDistrictsSelectorPropsType } from '../types';

export default function SubDistrictSelector({
	onChangeHandler,
	classes,
	disabled = false,
	districtId,
}: SubDistrictsSelectorPropsType) {
	const [subDistricts, setSubDistricts] = useState<SubDistrict[]>([]);

	useEffect(() => {
		fetchSubDistricts();
	}, [districtId]);

	const fetchSubDistricts = async () => {
		try {
			const res = await fetch('data/sub-districts.json', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			const data = await res.json();
			if (districtId) {
				setSubDistricts(
					data?.filter(
						(item: SubDistrict) => item.district_id === districtId?.toString()
					)
				);
			} else {
				setSubDistricts(data);
			}
		} catch (error) {
			console.error('Error fetching sub districts:', error);
		}
	};

	return (
		<select
			onChange={(event) => onChangeHandler(JSON.parse(event.target.value))}
			className={classes}
			disabled={disabled}
		>
			{subDistricts.map((subDistrict, index) => (
				<option key={index} value={JSON.stringify(subDistrict)}>
					{subDistrict.name}
				</option>
			))}
		</select>
	);
}
