export const CategoryMaster = [
  {
    isTextInput: true,
    name: "category_master",
    label: "Category Name",
    breakpoint: 4,
    // pattern: /^[A-Za-z]+$/,
    validation: { required: true },
  },
  {
    isRadioAction: true,
    name: "status",
    label: "Status",
    breakpoint: 4,
    radioButtonData: [{ name: "Active" }, { name: "InActive" }],
    defaultValue: "Active",
    validation: { required: true },
  },
  {
    isEmptySpace: true,
    breakpoint: 4,
    name: "space",
  },
];

export const SubCategory = [
  {
    isDropdown: true,
    name: "category_id",
    label: "Category Name",
    breakpoint: 4,
    placeholder: "Select",
    returnId: true,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "sub_category",
    label: "Sub Category Name",
    // pattern: /^[A-Za-z]+$/,
    breakpoint: 4,
    validation: { required: true },
  },
  {
    isRadioAction: true,
    name: "status",
    label: "Status",
    breakpoint: 4,
    radioButtonData: [{ name: "Active" }, { name: "InActive" }],
    validation: { required: true },
  },
];
export const TermsConditions = [
  {
    isRadioAction: true,
    name: "user_type",
    // labelText: 'User Type',
    breakpoint: 12,
    radioButtonData: [{ name: "User" }, { name: "Partner" }],
    label: "User Type",
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "terms_and_condition",
    label: "Terms and Conditions",
    // pattern: /^[A-Za-z]+$/,
    multiline: true,
    rows: 3,
    breakpoint: 8,
    radioButtonData: [{ name: "User" }, { name: "Partner" }],
    validation: { required: true },
  },
  {
    isRadioAction: true,
    name: "status",
    label: "Status",
    radioButtonData: [{ name: "Active" }, { name: "InActive" }],
    breakpoint: 4,
    validation: { required: true },
  },
];

export const PrivacyPolicy = [
  {
    isRadioAction: true,
    name: "type",
    label: "User Type",
    breakpoint: 12,
    radioButtonData: [{ name: "User" }, { name: "Partner" }],
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "privacy_and_policy",
    label: "Privacy Policy",
    multiline: true,
    rows: 3,
    // pattern: /^[A-Za-z]+$/,
    breakpoint: 8,
    validation: { required: true },
  },
  {
    isRadioAction: true,
    name: "status",
    label: "Status",
    radioButtonData: [{ name: "Active" }, { name: "InActive" }],
    breakpoint: 4,
    validation: { required: true },
  },
];

export const DropdownData = [
  {
    id: 1,
    value: "aaa",
  },
  {
    id: 2,
    value: "bbb",
  },
];

export const categoryHeader = [
  "S.No",
  "Category",
  "Created Date",
  "Status",
  "Action",
];
export const subCategoryHeader = [
  "S.No",
  "Category",
  "Sub Category",
  "Created Date",
  "Status",
  "Action",
];
export const termsHeader = [
  "S.No",
  "User Type",
  "Created Date",
  "Status",
  "Action",
];
export const privacyHeader = [
  "S.No",
  "User Type",
  // 'Privacy and Policy',
  "Created Date",
  "Status",
  "Action",
];

export const tabArray = [
  {
    id: 1,
    tabText: "Category Master",
    tabColor: "#FFC518",
  },
  {
    id: 2,
    tabText: "Sub Category",
    tabColor: "#FFC518",
  },
  {
    id: 3,
    tabText: "Terms and Conditions",
    tabColor: "#ffc51c",
  },
  {
    id: 4,
    tabText: "Privacy Policy",
    tabColor: "#ffc51c",
  },
];
export const categoryListPayload = {
  data: {
    isFilter: false,
    isSearch: false,
    filter: true,
  },
  method: "post",
  apiName: "getAllCategoryList",
};

export const subCategoryListPayload = {
  data: {
    isFilter: false,
    isSearch: false,
    filter: true,
  },
  method: "post",
  apiName: "getAllSubCategory",
};

export const termsListPayload = {
  data: {
    isFilter: false,
    isSearch: false,
    filter: true,
  },
  method: "get",
  apiName: "getAllTermsAndCondition",
};

export const privacyListPayload = {
  // data: {
  // 	isFilter: false,
  // 	isSearch: false,
  // 	filter: true,
  // },
  method: "post",
  apiName: "getPrivacyPolicyAll",
};

export const categoryEditPayload = {
  // data: submitData,
  method: "PUT",
  apiName: `updateCategory/`,
};
export const categoryCreatePayload = {
  // data: submitData,
  method: "POST",
  apiName: `createCategory`,
};

export const updateSubCategoryPayload = {
  method: "PUT",
  apiName: `updateSubCategory/`,
};

export const subCategoryCreatePayload = {
  method: "POST",
  apiName: `createSubCategory`,
};

export const updateTermsAndConditionPayload = {
  method: "PUT",
  apiName: `updateTermsAndCondition/`,
};
export const termsConditionCreatePayload = {
  method: "POST",
  apiName: `createTermsAndCondition`,
};
export const updatePrivacyPayload = {
  method: "PUT",
  apiName: `updatePrivacyPolicy/`,
};

export const privacyCreatePayload = {
  method: "POST",
  apiName: `createPrivacyPolicy`,
};
export const getCategoryPayload = {
  data: {},
  method: "get",
  apiName: `getCategory/`,
};
export const getSubCategoryPayload = {
  data: {},
  method: "get",
  apiName: `getSubCategoryById/`,
};
export const getTermConditionPayload = {
  data: {},
  method: "get",
  apiName: `getTermsAndCondition/`,
};
export const getPrivacyPolicyPayload = {
  data: {},
  method: "get",
  apiName: `getPrivacyPolicyById/`,
};
export const deleteCategoryPayload = {
  method: "DELETE",
  apiName: `deleteCategory/`,
};
export const deleteSubCategoryPayload = {
  method: "DELETE",
  apiName: `deleteSubCategoryById/`,
};
export const deleteTermPayload = {
  method: "DELETE",
  apiName: `deleteTermsAndCondition/`,
};
export const deletePrivacyPayload = {
  method: "DELETE",
  apiName: `deletePrivacyPolicyById/`,
};

export const getHeader = (tabValue) => {
  if (tabValue === 0) {
    return categoryHeader;
  }
  if (tabValue === 1) {
    return subCategoryHeader;
  }
  if (tabValue === 2) {
    return termsHeader;
  }

  if (tabValue === 3) {
    return privacyHeader;
  }
  return categoryHeader;
};
