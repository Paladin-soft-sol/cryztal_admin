/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import {
  Table,
  CustomTypography,
  CustomButton,
  CustomDropdown,
  DateRangePicker,
  TextInput,
  CustomFileUploader,
  PincodeDropdown,
  ColorBanner,
  MultiImage,
  Tiles,
} from "../../components/index";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import CustomIcons from "../../utils/icon/index";
import actions from "../../actions";
import AdView from "./adViewModal";
import Toast from "../../utils/Notification/Toast";
import {
  AdMasterEntries,
  DefaultAdMasterEntriesValues,
  updateAdMasterPayload,
  createAdMasterPayload,
} from "./AdMasterEntries";
import "./main.css";
import { format } from "date-fns";

/**
 *
 * @returns
 */

function AdScreen() {
  const defaultValues = DefaultAdMasterEntriesValues;
  console.log(defaultValues, "defaultValues123");
  const [editAbleValues, setEditAbleValues] = useState({});
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    defaultValues: JSON.parse(JSON.stringify(editAbleValues)),
  });
  const isEdit = Object.keys(editAbleValues)?.length > 0;
  const getFormValues = getValues();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formWatchFields = watch();
  const admasterdropdown = useSelector((state) => state?.admasterdropdown);
  const palettedropdown = useSelector((state) => state?.palettedropdown);
  const admaster = useSelector((state) => state?.admaster);
  const adMasterGet = useSelector(
    (state) => state?.admaster?.admasterGet?.editData
  );
  const admasterCreate = useSelector((state) => state?.admaster);
  const [showToast, setShowToast] = useState();
  const [list, setList] = useState();
  const [action, setAction] = React.useState("");
  const [btnTitle, setBtnTitle] = useState("SUBMIT");
  const [dropdownList, setDropdownList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [deleteApi, setDeleteApi] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [editId, setEditId] = useState();
  const [paletteList, setPaletteList] = useState([]);
  const paletteValue = paletteList?.map((data) => data?.id);
  const [cityDropdownList, setCityDropdownList] = useState([]);
  const [resetValue, setResetValue] = React.useState([]);
  const [table, setTable] = useState([]);
  const [multiImage, setMultiImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [adView, setAdView] = useState(false);
  const [nationDropdownList, setNationDropdownList] = useState([]);
  const [viewId, setViewId] = useState();
  const [stateDropdownList, setStateDropdownList] = useState([]);
  const [post, setPost] = useState(null);
  const [selectedPaletteColorId, setSelectedPaletteColorId] = useState(null);
  const [selectedAdVisId, setSelectedAdVisId] = useState(null);
  const [selectedTiles, setSelectedTiles] = useState(null);
  const [pincodeValue, setPincodeValue] = useState("");

  useEffect(() => {
    const tempArr = [];
    admasterdropdown?.admasterdropdown?.data?.map((values, index) =>
      tempArr.push({
        id: values?.id,
        value: values?.store_name,
      })
    );
    setDropdownList(tempArr);
  }, [admasterdropdown]);

  useEffect(() => {
    const tempArr = [];
    palettedropdown?.palettedropdown?.data?.map((values, index) =>
      tempArr.push({
        id: values?.palette_id,
        value: values?.palette_color,
      })
    );
    setPaletteList(tempArr);
  }, [palettedropdown]);

  useEffect(() => {
    const data = {
      data: {},
      method: "get",
      apiName: "getAdMaster",
    };
    dispatch(actions.ADMASTER(data));
  }, [dispatch]);

  useEffect(() => {
    const dropdownData = {
      data: {},
      method: "get",
      apiName: "getShopList",
    };
    dispatch(actions.ADMASTERDROPDOWNS(dropdownData));
  }, [dispatch]);

  useEffect(() => {
    const paletteData = {
      data: {},
      method: "get",
      apiName: "getPaletteColor",
    };
    dispatch(actions.PALETTEDROPDOWNS(paletteData));
  }, [dispatch]);

  //statedropdown

  const admasterstatedropdown = useSelector(
    (state) => state?.admasterstatedropdown
  );
  useEffect(() => {
    const tempArr = [];
    admasterstatedropdown?.admasterstatedropdown?.data?.map((values, index) =>
      tempArr.push({
        id: values?.state_id,
        value: values?.state,
      })
    );
    setStateDropdownList(tempArr);
  }, [admasterstatedropdown]);

  useEffect(() => {
    const statedropdownData = {
      data: {},
      method: "get",
      apiName: "getStateDropdown",
    };
    dispatch(actions.ADMASTERSTATEDROPDOWNS(statedropdownData));
  }, [dispatch]);

  //citydropdown

  const admastercitydropdown = useSelector(
    (state) => state?.admastercitydropdown
  );
  useEffect(() => {
    const tempArr = [];
    admastercitydropdown?.admastercitydropdown?.data?.map((values, index) =>
      tempArr.push({
        id: values?.city_id,
        value: values?.city,
      })
    );
    setCityDropdownList(tempArr);
  }, [admastercitydropdown]);
  useEffect(() => {
    const citydropdownData = {
      data: {},
      method: "get",
      apiName: "getCityDropdown",
    };
    dispatch(actions.ADMASTERCITYDROPDOWNS(citydropdownData));
  }, [dispatch]);

  //nationdropdown
  const admasternationdropdown = useSelector(
    (state) => state?.admasternationdropdown
  );
  useEffect(() => {
    const tempArr = [];
    admasternationdropdown?.admasternationdropdown?.data?.map((values, index) =>
      tempArr.push({
        id: values?.country_id,
        value: values?.country,
      })
    );
    setNationDropdownList(tempArr);
  }, [admasternationdropdown]);

  useEffect(() => {
    const nationdropdownData = {
      data: {},
      method: "get",
      apiName: "getCountryDropdown",
    };
    dispatch(actions.ADMASTERNATIONDROPDOWNS(nationdropdownData));
  }, [dispatch]);

  const header = [
    "S.No",
    "Title",
    "URL",
    "Locations",
    "Start Date",
    "End Date",
    "Action",
  ];

  useEffect(() => {
    if (admaster?.admaster?.data && Array.isArray(admaster.admaster.data)) {
      const tmpArr = admaster.admaster.data.map((values) => ({
        id: values.ad_id,
        ad_title: values.ad_title,
        shop_ad: values.shop_ad,
        ad_vis_location: values.ad_vis_location,
        ad_from_date: values.ad_from_date,
        ad_to_date: values.ad_to_date,
      }));
      setTable(tmpArr);
    } else {
      setTable([]);
    }
  }, [admaster]);

  const getImage = (value) => {
    setLogoImage(value);
  };
  const getMultipleImage = (value) => {
    setMultiImage(value[0]);
  };
  const handleCancel = () => {
    reset({
      ad_title: "",
      shop_id: "",
      ad_master: "",
      ad_vis_location: "",
      ad_from_date: "",
      ad_to_date: "",
      tiles: "",
    });
    setBtnTitle("SUBMIT");
    setEditId("");
  };

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const startDate = selectedDates?.startDate
    ? format(selectedDates?.startDate, "yyyy/MM/dd")
    : null;
  const endDate = selectedDates?.endDate
    ? format(selectedDates.endDate, "yyyy/MM/dd")
    : null;

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  const handlePincodeChange = (value) => {
    setPincodeValue(value);
  };

  function resetAllValues() {
    setSelectedAdVisId("");
    setSelectedTiles([]);
    setSelectedPaletteColorId("");
    setPincodeValue("");
    reset(defaultValues);
  }

  function onSubmit(data1) {
    const formData = new FormData();
    formData.append("ad_title", data1.ad_title);
    formData.append("shop_id", selectedAdVisId);
    if (data1?.shop_ad?.length > 0) {
      if (!Array.isArray(data1?.shop_ad)) {
        formData.append("shop_ad", data1?.shop_ad instanceof File ? "" : "");
      } else {
        data1?.shop_ad?.forEach((item) => {
          formData.append("shop_ad", item instanceof File ? item : "");
        });
      }
    }
    const splitArray = placeholderValue.split(",");

    formData.append("tiles", JSON.stringify(splitArray));
    formData.append("palette_id", selectedPaletteColorId || "");
    formData.append("ad_vis_id", 1);
    formData.append("ad_vis_location", pincodeValue || "");
    formData.append("ad_from_date", startDate || "");
    formData.append("ad_to_date", endDate || "");
    formData.append("created_by", 1);
    formData.append("updated_by", 1);
    reset(defaultValues);
    setResetValue(defaultValues);
    callOnSubmit(formData);
    setBtnTitle("SUBMIT");
    setEditId();
  }

  const callOnSubmit = (formData) => {
    if (adMasterGet) {
      const adEditId = adMasterGet?.ad_id;
      const data = {
        data: formData,
        method: "put",
        apiName: "updateAdMaster",
        id: adEditId,
      };
      dispatch(actions.ADMASTER_EDIT(data));
    } else {
      createAdMasterPayload.data = { ...formData };
      const data = {
        data: formData,
        method: "post",
        apiName: "createAdMaster",
      };
      dispatch(actions.ADMASTER(data));
    }
    setEditId();
  };
  useEffect(() => {
    if (adMasterGet) {
      setBtnTitle("UPDATE");
      reset(editAbleValues);
    }
  }, [editAbleValues, adMasterGet]);

  const handleCityChange = (cityValue) => {
    setPincodeValue(cityValue);
  };

  const handleStateChange = (stateValue) => {
    setPincodeValue(stateValue);
  };

  const handleNationChange = (nationValue) => {
    setPincodeValue(nationValue);
  };

  // Get Function
  const handleOpen = (id) => {
    console.log(id, "setAdView");
    setAdView(!adView);
    setViewId(id);
  };

  // Delete Function
  const handleDelete = (id) => {
    setDeleteApi(true);
    setTimeout(() => setDeleteApi(false), 1000);
    setOpen(false);
    const deleteData = {
      data: {},
      method: "delete",
      apiName: `deleteAdMaster/${id}`,
    };

    dispatch(actions.ADMASTER_DELETE(deleteData));
    setList([
      {
        id: 1,
        description: "Data Removed successfully",
        backgroundColor: "check",
        icon: "check",
      },
    ]);
    setShowToast(true);
  };

  const getEditData = (editId) => {
    const actionData = {
      data: {},
      method: "get",
      apiName: `getAdMasterById/${editId}`,
      edit: true,
    };
    console.log(actionData, "actionData");
    dispatch(actions.ADMASTER_GET(actionData));
  };

  useEffect(() => {
    if (adMasterGet) {
      let editObj = {
        ad_title: adMasterGet.ad_title,
        ad_vis_location: adMasterGet.ad_vis_location,
        palette_id: adMasterGet.palette_id,
        shop_id: adMasterGet.shop_id,
        ad_from_date: adMasterGet.ad_from_date,
        ad_to_date: adMasterGet.ad_to_date,
        tiles: adMasterGet.tiles,
      };
      setEditAbleValues(editObj);
      setSelectedAdVisId(editObj.shop_id);
      setSelectedTiles(editObj.tiles);
      setPincodeValue(editObj.ad_vis_location);
    }
  }, [adMasterGet]);

  const [placeholderValue, setPlaceholderValue] = useState("");
  const handlePlaceholderChange = (value) => {
    setPlaceholderValue(value);
  };

  return (
    <Grid pl={3} item md={12}>
      {showToast && (
        <>
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}></Stack>
          <Toast
            toastList={list}
            position="top-right"
            autoDelete
            autoDeleteTime={3000}
          />
        </>
      )}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you absolutely sure?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Data deleted cannot be recovered?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel,Keep Details</Button>
          <Button onClick={(id) => handleDelete(id)} autoFocus>
            Yes,Delete Details
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container md={12} className="adMaster_Title">
        <CustomTypography
          type="header"
          text="Ad Master"
          customClass="headText"
        />
      </Grid>
      <Grid container item p={2} md={12} display="flex">
        <Grid container item md={12} sm={12} spacing={1} display="flex">
          {AdMasterEntries?.map((keyValue) => (
            <Grid item md={keyValue.breakpoint} pl={2} sm={6}>
              <Controller
                name={keyValue.name}
                rules={{
                  required: keyValue?.validation?.required,
                  pattern: keyValue.pattern,
                }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    {keyValue?.isTextInput && (
                      <Grid item md={12} sm={12}>
                        <TextInput
                          type="text"
                          label={keyValue.label}
                          onHandleChange={onChange}
                          value={value}
                          multiline={keyValue.multiline}
                          rows={keyValue.rows}
                          customClass="capitalize"
                        />
                      </Grid>
                    )}
                    {keyValue?.isChooseTiles && (
                      <Grid item md={12} sm={12}>
                        <Tiles
                          label={keyValue.label}
                          handleChange={onChange}
                          onChangePlaceholder={handlePlaceholderChange}
                          returnId={keyValue.returnId}
                        />
                      </Grid>
                    )}
                    {/* {keyValue?.isChooseTiles && (
                      <Grid item md={12} sm={12}>
                        <CustomDropdown
                          label={keyValue.label}
                          handleChange={(event) => {
                            setSelectedTiles(event.target.value);
                            onChange(event.target.value);
                          }}
                              
                           value={selectedTiles || ""}   
                          data={keyValue.DropdownData}
                          placeholder={keyValue.placeholder}
                          returnId={keyValue.returnId}
                        />
                      </Grid>
                    )} */}

                    {keyValue?.isColorBanner && (
                      <Grid item md={12} sm={12}>
                        <ColorBanner
                          label={keyValue.label}
                          handleChange={(selectedColorId) => {
                            onChange(selectedColorId);
                            setSelectedPaletteColorId(selectedColorId);
                          }}
                          value={value || ""}
                          colors={paletteList}
                          placeholder={keyValue.placeholder}
                          returnId={keyValue.returnId}
                        />
                      </Grid>
                    )}
                    {keyValue?.isPincodeDropdown && (
                      <Grid item md={12} sm={12}>
                        <PincodeDropdown
                          label={keyValue.label}
                          onChange={handlePincodeChange}
                          onCityChange={handleCityChange}
                          onStateChange={handleStateChange}
                          onNationChange={handleNationChange}
                          value={pincodeValue}
                          stateDropdownList={stateDropdownList}
                          cityDropdownList={cityDropdownList}
                          nationDropdownList={nationDropdownList}
                          placeholder={keyValue.placeholder}
                          returnId={keyValue.returnId}
                          handleChange={(event) => {
                            setPincodeValue(event.target.value);
                            onChange(event.target.value);
                          }}
                        />
                      </Grid>
                    )}
                    {keyValue?.isDateDropdown && (
                      <Grid item md={12} sm={12}>
                        <DateRangePicker
                          label={keyValue.label}
                          handleChange={handleDateChange}
                          date={editAbleValues}
                          dateKeys={keyValue?.dateKeys}
                          edit={isEdit}
                          placeholder={keyValue.placeholder}
                          returnId={keyValue.returnId}
                        />
                      </Grid>
                    )}
                    {keyValue?.isDropdown && (
                      <Grid item md={12} sm={12}>
                        <CustomDropdown
                          label={keyValue.label}
                          handleChange={(event) => {
                            setSelectedAdVisId(event.target.value);
                            onChange(event.target.value);
                          }}
                          value={selectedAdVisId || ""}
                          data={dropdownList}
                          placeholder={keyValue.placeholder}
                          returnId={keyValue.returnId}
                        />
                      </Grid>
                    )}

                    {keyValue?.isMultiImageUpload && (
                      <Grid item md={12} sm={12} className="shop_img_align">
                        <div className="fex">
                          {Array.isArray(formWatchFields?.shop_images) &&
                            formWatchFields?.shop_images.map(
                              (imageSrc, key) => (
                                <div className="shop_img" key={imageSrc}>
                                  <img src={imageSrc} alt="mm" />
                                </div>
                              )
                            )}
                        </div>

                        <MultiImage
                          label="Shop image"
                          upLoad={CustomIcons.UploadIcon}
                          getImage={(val) => {
                            onChange(val);
                            getMultipleImage(val);
                          }}
                        />
                      </Grid>
                    )}
                    {keyValue?.isSingleImageUpload && (
                      <Grid item md={12} sm={12} className="shop_img_align">
                        <CustomFileUploader
                          Label="Upload Ad"
                          upLoad={CustomIcons.UploadIcon}
                          getImage={(val) => {
                            onChange(val);
                            getImage(val);
                          }}
                        />
                      </Grid>
                    )}
                  </>
                )}
              />
              {errors && errors[keyValue?.name]?.type === "required" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.label} is Required`}
                    type="error"
                  />
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          columnGap={2}
          display="flex"
          md={12}
          sm={12}
          pt={2}
          name="position"
          className="position-select"
        >
          <>
            <CustomButton
              customClass="submit_button"
              btnTitle={btnTitle}
              variant="contained"
              color="primary"
              btnStyles={{
                color: "#fff",
                background: "#F4A01C",
                border: "1px solid #F4A01C",
                padding: "5px 25px",
                fontSize: "17px",
              }}
              onClickHandle={handleSubmit(onSubmit)}
            />
            <CustomButton
              customClass="cancel_button"
              btnTitle="CANCEL"
              variant="outlined"
              color="primary"
              btnStyles={{
                color: "#FF748B",
                background: "#FF748B38",
                border: "1px solid #FF748B",
                padding: "5px 25px",
                fontSize: "17px",
              }}
              onClickHandle={() => handleCancel()}
            />
          </>
        </Grid>
      </Grid>
      <Grid pl={3}>
        <Table
          header={header}
          rows={table}
          printer={CustomIcons.Printer1}
          view={CustomIcons.View}
          edit={CustomIcons.EditIcon}
          editOpen={(id) => getEditData(id)}
          deleteIconSrc={CustomIcons.DeleteIcon}
          modalOpen={(id) => handleOpen(id)}
          action
          actionItem={{ view: true, deleteIcon: true, edit: true }}
          isDrop={false}
          deleteData={(id) => handleDelete(id)}
        />
      </Grid>
      {adView && <AdView viewId={viewId} />}
    </Grid>
  );
}

export default AdScreen;
