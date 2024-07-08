// ============== Types for divisions selector ===============
export interface Division {
	id: string;
	name: string;
	bn_name: string;
	url: string;
}

export type DivisionsSelectorPropsType = {
	onChangeHandler: (value: any) => void;
	classes?: string;
	disabled?: boolean;
	filterBy?: string;
};

// =============== Types for district selector =================
export interface District {
	id: string;
	division_id: string;
	name: string;
	bn_name: string;
	lat: string;
	lon: string;
	url: string;
}

export type DistrictsSelectorPropsType = {
	onChangeHandler: (value: any) => void;
	classes?: string;
	disabled?: boolean;
	divisionId?: string;
};

// =============== Types for sub-district selector =================
export interface SubDistrict {
	id: string;
	district_id: string;
	name: string;
	bn_name: string;
	url: string;
}

export type SubDistrictsSelectorPropsType = {
	onChangeHandler: (value: any) => void;
	classes?: string;
	disabled?: boolean;
	districtId?: string;
};

// =============== Types for unions selector =================
export interface Union {
	id: string;
	upazilla_id: string;
	name: string;
	bn_name: string;
	url: string;
}

export type UnionsSelectorPropsType = {
	onChangeHandler: (value: any) => void;
	classes?: string;
	disabled?: boolean;
	subDistrictId?: string;
};
