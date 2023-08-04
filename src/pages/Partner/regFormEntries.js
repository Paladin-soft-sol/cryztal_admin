export const RegFormEntries = [
  {
    isTextInput: true,
    name: "store_name",
    label: "Store Name",
    breakpoint: 3,
    validation: { required: true },
    pattern: "^[a-zA-Z0-9_]*$",
  },

  {
    isMultipleSelectChip: true,
    name: "type_of_store",
    label: "Type of Store",
    breakpoint: 3,
    disabled: false,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "ABN_number",
    label: "ABN Number",
    // pattern: /^(d *?){11}$/,
    // pattern: /^(\d *?){11}$/,
    breakpoint: 3,
    // validation: { required: true, maxLength: 11 },
  },
  {
    isTextInput: true,
    name: "GST_number",
    label: "GST No:	(eg:18AABCU9603R1ZP)",
    breakpoint: 3,
    pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    uniqueText: true,
    // validation: {
    // 	required: true,
    // 	// maxLength: 15,
    // },
  },
  {
    isTextInput: true,
    name: "contact_person_name",
    label: "Contact Person Name",
    breakpoint: 3,
    pattern: "^[a-zA-Z0-9_]*$",

    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "primary_contact",
    label: "Contact Mobile Number",
    type: "number",
    breakpoint: 3,
    validation: { required: true },
    // pattern:
    // 	/^\(?(?:\+?61|0)(?:(?:2\)?[ -]?(?:3[ -]?[38]|[46-9][ -]?[0-9]|5[ -]?[0-35-9])|3\)?(?:4[ -]?[0-57-9]|[57-9][ -]?[0-9]|6[ -]?[1-67])|7\)?[ -]?(?:[2-4][ -]?[0-9]|5[ -]?[2-7]|7[ -]?6)|8\)?[ -]?(?:5[ -]?[1-4]|6[ -]?[0-8]|[7-9][ -]?[0-9]))(?:[ -]?[0-9]){6}|4\)?[ -]?(?:(?:[01][ -]?[0-9]|2[ -]?[0-57-9]|3[ -]?[1-9]|4[ -]?[7-9]|5[ -]?[018])[ -]?[0-9]|3[ -]?0[ -]?[0-5])(?:[ -]?[0-9]){5})$/,
    // pattern: /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/,
    // pattern: /^0[0-8]\d{8}$/g,
  },
  {
    isTextInput: true,
    name: "secondary_contact",
    label: "Alternate Mobile Number",
    type: "number",
    breakpoint: 3,
    // pattern:
    // 	/^\(?(?:\+?61|0)(?:(?:2\)?[ -]?(?:3[ -]?[38]|[46-9][ -]?[0-9]|5[ -]?[0-35-9])|3\)?(?:4[ -]?[0-57-9]|[57-9][ -]?[0-9]|6[ -]?[1-67])|7\)?[ -]?(?:[2-4][ -]?[0-9]|5[ -]?[2-7]|7[ -]?6)|8\)?[ -]?(?:5[ -]?[1-4]|6[ -]?[0-8]|[7-9][ -]?[0-9]))(?:[ -]?[0-9]){6}|4\)?[ -]?(?:(?:[01][ -]?[0-9]|2[ -]?[0-57-9]|3[ -]?[1-9]|4[ -]?[7-9]|5[ -]?[018])[ -]?[0-9]|3[ -]?0[ -]?[0-5])(?:[ -]?[0-9]){5})$/,
    // pattern: /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/,
    // validation: { required: true, maxLength: 10 },
  },
  {
    isTextInput: true,
    name: "store_email",
    label: "Email",
    breakpoint: 3,
    // uniqueText: true,
    pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
    // /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
    // pattern:
    // /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
    validation: {
      required: true,
    },
  },
  {
    isTextInput: true,
    name: "state",
    label: "State",
    // pattern: /^[A-Za-z]+$/,
    breakpoint: 3,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "country",
    label: "Country",
    breakpoint: 3,
    disabled: true,
    // DropdownData: [
    // 	{
    // 		id: 1,
    // 		value: 'Australia',
    // 	},
    // 	{
    // 		id: 2,
    // 		value: 'bbb',
    // 	},
    // ],
    validation: { required: true },
  },

  {
    isTextInput: true,
    name: "suburb",
    label: "Suburb",
    breakpoint: 3,
    pattern: /^[A-Za-z]+$/,

    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "zipcode",
    label: "Post Code",
    type: "number",
    breakpoint: 3,
    validation: { required: true, maxLength: 6 },
  },
  {
    isTextInput: true,
    name: "Latitude",
    label: "Latitude",

    breakpoint: 3,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "Longitude",
    label: "Longitude",

    breakpoint: 3,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "Shop_Offers",
    label: "Shop Offers",

    breakpoint: 3,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "address",
    label: "Address",
    multiline: true,
    rows: 3,
    breakpoint: 6,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "shop_description",
    label: "Shop Description",
    multiline: true,
    rows: 3,
    breakpoint: 6,
    validation: { required: true },
  },

  {
    isDropdown: true,
    name: "status",
    label: "Status",
    placeholder: "Status",
    DropdownData: [
      {
        id: 1,
        value: "Active",
      },
      {
        id: 2,
        value: "InActive",
      },
    ],
    breakpoint: 3,
    disabled: true,
    validation: { required: true },
  },

  {
    isSingleImageUpload: true,
    name: "shop_logo",
    breakpoint: 3,
    validation: { required: false },
  },
  {
    isMultiImageUpload: true,
    name: "shop_images",
    breakpoint: 3,
    validation: { required: false },
  },
];
export const RegFormEntriesEdit = [
  {
    isTextInput: true,
    name: "store_name",
    label: "Store Name",
    breakpoint: 3,

    validation: { required: true },
  },
  {
    isMultipleSelectChip: true,
    name: "type_of_store",
    label: "Type of Store",
    breakpoint: 3,

    placeholder: "Type of Store",
    // validation: { required: true },
  },
  {
    isTextInput: true,
    name: "ABN_number",
    label: "ABN Number",
    // pattern: /^(d *?){11}$/,
    // pattern: /^(\d *?){11}$/,
    breakpoint: 3,

    // validation: { required: true },
  },
  {
    isTextInput: true,
    name: "GST_number",
    label: "GST No:	(eg:18AABCU9603R1ZP)",
    breakpoint: 3,
    // pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,

    // validation: {
    // 	required: true,
    // 	// maxLength: 15,
    // },
  },
  {
    isTextInput: true,
    name: "contact_person_name",
    label: "Contact Person Name",
    breakpoint: 3,

    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "primary_contact",
    label: "Contact Mobile Number",
    type: "number",
    breakpoint: 3,

    validation: { required: true },
    // pattern: /^0[0-8]d{8}$/g,
    // pattern: /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/,
  },
  {
    isTextInput: true,
    name: "secondary_contact",
    label: "Alternate Mobile Number",
    type: "number",
    breakpoint: 3,

    // pattern: /^0[0-8]d{8}$/g,
    // pattern: /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/,
    // validation: { required: true },
  },
  {
    isTextInput: true,
    name: "store_email",
    label: "Email",
    breakpoint: 3,

    pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
    // /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
    // pattern:
    // /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
    validation: {
      required: true,
    },
  },
  {
    isTextInput: true,
    name: "state",
    label: "State",
    breakpoint: 3,

    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "country",
    label: "Country",
    breakpoint: 3,

    // DropdownData: [
    // 	{
    // 		id: 1,
    // 		value: 'Australia',
    // 	},
    // 	{
    // 		id: 2,
    // 		value: 'bbb',
    // 	},
    // ],
    validation: { required: true },
  },

  {
    isTextInput: true,
    name: "suburb",
    label: "Suburb",

    breakpoint: 3,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "zipcode",
    label: "Post Code",
    type: "number",
    breakpoint: 3,

    validation: { required: true, maxLength: 6 },
  },
  {
    disableInput: true,
    name: "Latitude",
    label: "Latitude",
    disable: true,

    breakpoint: 3,
    validation: { required: true },
  },
  {
    disableInput: true,
    name: "Longitude",
    label: "Longitude",
    disable: true,

    breakpoint: 3,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "Shop_Offers",
    label: "Shop Offers",

    breakpoint: 3,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "address",
    label: "Address",

    multiline: true,
    // rows: 4.5,
    breakpoint: 6,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "shop_description",
    label: "Shop Description",
    multiline: true,

    // rows: 4.5,
    breakpoint: 6,
    validation: { required: true },
  },

  // {
  // 	isDropdown: true,
  // 	name: 'store_status',
  // 	label: 'Status',
  // 	// DropdownData: [
  // 	// 	{
  // 	// 		id: 0,
  // 	// 		value: 'InActive',
  // 	// 	},
  // 	// 	{
  // 	// 		id: 1,
  // 	// 		value: 'Active',
  // 	// 	},
  // 	// 	{
  // 	// 		id: 2,
  // 	// 		value: 'Quarantine',
  // 	// 	},
  // 	// ],
  // 	breakpoint: 3,
  // 	validation: { required: true },
  // },

  {
    isSingleImageUpload: true,
    name: "shop_logo",
    breakpoint: 3,
    label: "Shop Logo",

    validation: { required: true },
  },
  {
    isMultiImageUpload: true,
    name: "shop_images",
    breakpoint: 3,
    label: "Shop Images",

    validation: { required: true },
  },
];
export const RegFormDefaultValues = {
  store_name: "",
  type_of_store: "",
  ABN_number: "",
  GST_number: "",
  contact_person_name: "",
  primary_contact: "",
  secondary_contact: "",
  store_email: "",
  state: "",
  country: "Australia",
  suburb: "",
  zipcode: "",
  address: "",
  shop_description: "",
  status: "Active",
  shop_logo: "",
  shop_images: "",
};
