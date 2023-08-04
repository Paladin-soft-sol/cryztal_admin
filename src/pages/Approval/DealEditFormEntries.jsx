
export const EditFormEntries = [
	// {
	// 	isTextInput: true,
	// 	name: 'store_name',
	// 	label: 'Store Name',
	// 	breakpoint: 3,
	// 	validation: { required: true },
	// 	pattern: '^[a-zA-Z0-9_]*$',
	// },

	{
		isDropdown: true,
		name: 'category',
		label: 'Category',
		breakpoint: 3,
		DropdownData: [],
		placeholder: 'Category',
		validation: { required: true },
	},
	// {
	// 	isDropdown1: true,
	// 	name: 'sub_category',
	// 	label: 'Sub Category',
	// 	breakpoint: 3,
	// 	DropdownData: [],
	// 	placeholder: 'Category',
	// 	validation: { required: true },
	// },
	{
		isMultipleSelectChip: true,
		name: 'sub_category',
		label: 'Sub Category',
		breakpoint: 3,

		placeholder: 'Sub Category',
		// validation: { required: true },
	},
	{
		isTextInput: true,
		name: 'deal_name',
		label: 'Deal Name',
		// pattern: /^(d *?){11}$/,
		// pattern: /^(\d *?){11}$/,
		breakpoint: 3,
		// validation: { required: true, maxLength: 11 },
	},

	{
		isTextInput: true,
		name: 'offer',
		label: 'Offer',

		breakpoint: 3,
		validation: { required: true },
	},

	{
		isTextInput: true,
		type: 'date',
		name: 'from_date',
		label: 'From Date',
		breakpoint: 3,
		validation: { required: true },
	},
	{
		isTextInput: true,
		type: 'date',
		name: 'to_date',
		label: 'To Date',
		breakpoint: 3,
		validation: { required: true },
	},
	{
		isTextInput: true,
		name: 'offer_description',
		label: 'Offer Description',
		multiline: true,
		rows: 3,
		breakpoint: 6,
		validation: { required: true },
	},
	{
		isDropdown2: true,
		name: 'status',
		label: 'Status',
		placeholder: 'Status',
		DropdownData: [
			{
				id: 1,
				value: 'Active',
			},
			{
				id: 2,
				value: 'InActive',
			},
		],
		breakpoint: 3,
		// disabled: true,
		validation: { required: true },
	},

	{
		isSingleImageUpload: true,
		name: 'image',
		label: 'Discount Images',
		breakpoint: 3,
		validation: { required: false },
	},
	// {
	// 	isMultiImageUpload: true,
	// 	name: 'images',
	// 	breakpoint: 3,
	// 	validation: { required: false },
	// },
];
export const EditFormEntriesEdit = [
	// {
	// 	isTextInput: true,
	// 	name: 'store_name',
	// 	label: 'Store Name',
	// 	breakpoint: 3,
	// 	validation: { required: true },
	// 	pattern: '^[a-zA-Z0-9_]*$',
	// },

	// {
	// 	isDropdown: true,
	// 	name: 'category',
	// 	label: 'Category',
	// 	DropdownData: [],
	// 	breakpoint: 3,
	// 	disabled: false,
	// 	validation: { required: true },
	// },

	// {
	// 	isMultipleSelectChip: true,
	// 	name: 'sub_category',
	// 	label: 'Sub Category',
	// 	breakpoint: 3,

	// 	placeholder: 'Sub Category',
	// 	// validation: { required: true },
	// },
	{
		isTypography: true,
		name: 'category',
		label: 'Category',
		breakpoint: 3,
		disabled: false,
		// validation: { required: true },
	},
	{
		isTypography: true,
		name: 'sub_category',
		label: 'Sub Category',
		breakpoint: 3,
		disabled: false,
		// validation: { required: true },
	},
	{
		isTextInput: true,
		name: 'deal_name',
		label: 'Deal Name',
		// pattern: /^(d *?){11}$/,
		// pattern: /^(\d *?){11}$/,
		breakpoint: 3,
		// validation: { required: true, maxLength: 11 },
	},

	{
		isTextInput: true,
		name: 'offer',
		label: 'Offer',
		breakpoint: 3,
		validation: { required: true },
	},

	{
		isTextInput: true,
		type: 'date',
		name: 'from_date',
		label: 'From Date',
		breakpoint: 3,
		validation: { required: true },
	
	},
	{
		isTextInput: true,
		type: 'date',
		name: 'to_date',
		label: 'To Date',
		breakpoint: 3,
		validation: { required: true },
	},
	{
		isTextInput: true,
		name: 'offer_description',
		label: 'Offer Description',
		multiline: true,
		rows: 3,
		breakpoint: 6,
		validation: { required: true },
	},
	{
		isDropdown2: true,
		name: 'status',
		label: 'Status',
		placeholder: 'Status',
		DropdownData: [
			{
				id: 1,
				value: 'Active',
			},
			{
				id: 2,
				value: 'InActive',
			},
			{
				id: 3,
				value: 'Quarantine',
			},
		],
		breakpoint: 3,
		// disabled: true,
		validation: { required: true },
	},

	{
		isSingleImageUpload: true,
		name: 'image',
		label: 'Discount Images',
		breakpoint: 3,
		validation: { required: false },
	},
	// {
	// 	isMultiImageUpload: true,
	// 	name: 'image',
	// 	breakpoint: 3,
	// 	validation: { required: false },
	// },
];
export const EditFormDefaultValues = {
	// store_name: '',
	category: '',
	sub_category: '',
	deal_name: '',
	offer: '',
	offer_description: '',
	status: 'Active',
	image: '',
	from_date: '',
	to_date: '',
};
