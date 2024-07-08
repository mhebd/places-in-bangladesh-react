import { useState } from 'react';
import DistrictSelector from './selector/DistrictSelector';
import DivisionsSelector from './selector/DivisionsSelector';
import { District, Division, SubDistrict } from './types';
import SubDistrictSelector from './selector/SubDistrictsSelector';
import UnionSelector from './selector/UnionsSelector';

function App() {
	const [division, setDivison] = useState<Division>();
	const [distirct, setDistrict] = useState<District>();
	const [subDistirct, setSubDistrict] = useState<SubDistrict>();
	const [_, setUnion] = useState<SubDistrict>();

	const handleDivisionOnChange = (value: Division) => {
		console.log(value);
		setDivison(value);
	};

	const handleDistrictOnChange = (value: District) => {
		console.log(value);
		setDistrict(value);
	};

	const handleSubDistrictOnChange = (value: SubDistrict) => {
		console.log(value);
		setSubDistrict(value);
	};
	const handleUnionOnChange = (value: SubDistrict) => {
		console.log(value);
		setUnion(value);
	};

	return (
		<div>
			<DivisionsSelector onChangeHandler={handleDivisionOnChange} />
			<DistrictSelector
				onChangeHandler={handleDistrictOnChange}
				divisionId={division?.id}
				disabled={!division?.id}
			/>
			<SubDistrictSelector
				onChangeHandler={handleSubDistrictOnChange}
				districtId={distirct?.id}
				disabled={!distirct?.id}
			/>
			<UnionSelector
				onChangeHandler={handleUnionOnChange}
				subDistrictId={subDistirct?.id}
				disabled={!subDistirct?.id}
			/>
		</div>
	);
}

export default App;
