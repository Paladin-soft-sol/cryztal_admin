export const AdMasterEntries = [
    {
      isTextInput: true,
      name: "ad_title",
      label: "Ad Title",
      breakpoint: 3,
      // pattern: /^[A-Za-z]+$/,
      validation: { required: true },
    },

    {
      isDropdown: true,
      name: 'shop_id',
      label: 'Select Shop',
      // placeholder: 'Role',
      breakpoint: 3,
      disabled: true,
      DropdownData: [
        {
          id: 1,
          value: 'Saravana Stores',
        },
        {
          id: 2,
          value: 'Rathna Stores',
        },
        {
          id: 3,
          value: 'legend Stores',
        },
      ],
      customClass: 'drop_align_edit',
    },
    {
        isSingleImageUpload: true,
        name: 'shop_ad',
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
        isEmptySpace: true,
        breakpoint: 3,
        name: "space",
      },


    
      {
        isChooseTiles: true,
        name: 'tiles',
        label: 'Choose Tiles',
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
        isColorBanner: true,
        name: 'palette_id',
        label: 'Banner/Pin Color',
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
        isPincodeDropdown: true,
        name: 'ad_vis_location',
        label: 'Ad Visibility Locations',
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
        name: 'ad_from_date',
        label: 'Ad Duration',
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
  
  ];
  export const DefaultAdMasterEntriesValues = {
    ad_title: "",
    shop_id: "",
    shop_ad: "",
    tiles: "",
    palette_id: "",
    ad_vis_location: "",
    ad_from_date: "",
  };
  