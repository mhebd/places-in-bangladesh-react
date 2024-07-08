import { useEffect, useState } from 'react';
import { Union, UnionsSelectorPropsType } from '../types';

export default function UnionSelector({
	onChangeHandler,
	classes,
	disabled = false,
	subDistrictId,
}: UnionsSelectorPropsType) {
	const [unions, setUnions] = useState<Union[]>([]);

	useEffect(() => {
		fetchUnions();
	}, [subDistrictId]);

	const fetchUnions = async () => {
		try {
			const res = await fetch('data/unions.json', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			const data = await res.json();
			if (subDistrictId) {
				setUnions(
					data?.filter((item: Union) => item.upazilla_id === subDistrictId)
				);
			} else {
				setUnions(data);
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
			{unions.map((union, index) => (
				<option key={index} value={JSON.stringify(union)}>
					{union.name}
				</option>
			))}
		</select>
	);
}
