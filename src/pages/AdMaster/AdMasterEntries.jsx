export const AdMasterEntries = [
    {
      isTextInput: true,
      name: "category_master",
      label: "Ad Title",
      breakpoint: 3,
      // pattern: /^[A-Za-z]+$/,
      validation: { required: true },
    },
    {
        isTextInput: true,
        name: "category_master",
        label: "URL",
        breakpoint: 3,
        // pattern: /^[A-Za-z]+$/,
        validation: { required: true },
      },
    
    
      {
        isSingleImageUpload: true,
        name: 'image',
        breakpoint: 3,
        // customClass: 'circleUpload',
        label: 'Profile',
        regForm: true,
        pattern: /\.(jpeg|png|gif|bmp)$/i,
        validation: { required: true },
        requiredField: true,
        error_message: 'Image',
        className: 'logoText',
      },
      {
        isMultiImageUpload: true,
        name: 'image',
        breakpoint: 3,
        // customClass: 'circleUpload',
        Label: 'Profile',
        regForm: true,
        pattern: /\.(jpeg|png|gif|bmp)$/i,
        validation: { required: true },
        requiredField: true,
        error_message: 'Image',
        className: 'logoText',
      },
      {
        isDropdown: true,
        name: 'user_type_id',
        label: 'Role',
        placeholder: 'Role',
        breakpoint: 3,
        disabled: true,
        DropdownData: [
          {
            id: 1,
            value: 'senior Admin',
          },
          {
            id: 2,
            value: 'senior support person',
          },
          {
            id: 3,
            value: 'junior support person',
          },
        ],
        customClass: 'drop_align_edit',
      },
      {
        isDropdown: true,
        name: 'user_type_id',
        label: 'Role',
        placeholder: 'Role',
        breakpoint: 3,
        disabled: true,
        DropdownData: [
          {
            id: 1,
            value: 'senior Admin',
          },
          {
            id: 2,
            value: 'senior support person',
          },
          {
            id: 3,
            value: 'junior support person',
          },
        ],
        customClass: 'drop_align_edit',
      },
      {
        isDropdown: true,
        name: 'user_type_id',
        label: 'Role',
        placeholder: 'Role',
        breakpoint: 3,
        disabled: true,
        DropdownData: [
          {
            id: 1,
            value: 'senior Admin',
          },
          {
            id: 2,
            value: 'senior support person',
          },
          {
            id: 3,
            value: 'junior support person',
          },
        ],
        customClass: 'drop_align_edit',
      },
      {
        isDropdown: true,
        name: 'user_type_id',
        label: 'Role',
        placeholder: 'Role',
        breakpoint: 3,
        disabled: true,
        DropdownData: [
          {
            id: 1,
            value: 'senior Admin',
          },
          {
            id: 2,
            value: 'senior support person',
          },
          {
            id: 3,
            value: 'junior support person',
          },
        ],
        customClass: 'drop_align_edit',
      },
    // {
    //   isEmptySpace: true,
    //   breakpoint: 4,
    //   name: "space",
    // },
  ];
  