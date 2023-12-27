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
import { useNavigate } from "react-router-dom";
import CustomIcons from "../../utils/icon/index";
import actions from "../../actions";
import AdView from "./adViewModal";
import {
  AdMasterEntries,
  DefaultAdMasterEntriesValues,
} from "./AdMasterEntries";
import "./main.css";
import { format } from 'date-fns'; 
import axios from "axios";

/**
 *
 * @returns
 */
function AdScreen() {
  const defaultValues = DefaultAdMasterEntriesValues;
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formWatchFields = watch();
  const admasterdropdown = useSelector((state) => state?.admasterdropdown);
  const palettedropdown = useSelector((state) => state?.palettedropdown);
  console.log(palettedropdown, "palettedropdown");
  console.log(admasterdropdown, "admasterdropdownadmasterdropdown");
  const [dropdownList, setDropdownList] = useState([]);
  const [paletteList, setPaletteList] = useState([]);
  const admaster = useSelector((state) => state?.admaster);

  const [table, setTable] = useState([]);
  const [multiImage, setMultiImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [adView, setAdView] = useState(false);
  const [viewId, setViewId] = useState();
  const [post, setPost] = useState(null);

  const shopValue = admasterdropdown?.admasterdropdown?.data?.map(
    (data) => data?.store_name
  );
  console.log(shopValue, "shopValue");

  useEffect(() => {
    const tempArr = [];
    admasterdropdown?.admasterdropdown?.data?.map((values, index) =>
      tempArr.push({
        id: values?.id,
        value: values?.store_name,
      })
    );
    console.log(tempArr, "tempArr");
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
    console.log(tempArr, "tempArr");
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

  const header = [
    "S.No",
    "Title",
    "URL",
    "Locations",
    "Start Date",
    "End Date",
    "Action",
  ];

  const handleOpen = (id) => {
    setAdView(!adView);
    setViewId(id);
  };

  useEffect(() => {
    if (admaster?.admaster?.data && Array.isArray(admaster.admaster.data)) {
      const tmpArr = admaster.admaster.data.map((values) => ({
        ad_id: values.ad_id,
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
      ad_master: "",
    });
  };

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  // const startDate = selectedDates?.startDate.slice(3,9);
  const startDate = selectedDates?.startDate ? format(selectedDates.startDate, 'yyyy/MM/dd') : null;
  const endDate = selectedDates?.endDate ? format(selectedDates.endDate, 'yyyy/MM/dd') : null;
  console.log(startDate, "selectedDates");

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  const [resetValue, setResetValue] = React.useState([]);
  console.log(resetValue, "resetValue");
  function onSubmit(data1) {
    console.log(data1, "data1admaster");
    const formData = new FormData();
    formData.append("ad_title", data1.ad_title);
    formData.append("shop_id", 1);
    if (data1?.shop_ad.length > 0) {
      if (!Array.isArray(data1?.shop_ad)) {
        formData.append("shop_ad", data1?.shop_ad instanceof File ? "" : "");
      } else {
        data1?.shop_ad.forEach((item) => {
          formData.append("shop_ad", item instanceof File ? item : "");
        });
      }
    }

    const tilesArray = [1];
    formData.append("tiles", JSON.stringify(tilesArray));
    formData.append("palette_id", 1);
    formData.append("ad_vis_id", 1);
    formData.append("ad_vis_location", data1.ad_vis_location);
    formData.append("ad_from_date", startDate || "");
    formData.append("ad_to_date", endDate || "");
    formData.append("created_by", 1);
    formData.append("updated_by", 1);
    const data = {
      data: formData,
      method: "post",
      apiName: "createAdMaster",
    };

    dispatch(actions.ADMASTER(data));
    reset(defaultValues);
    setResetValue(defaultValues);
  }

  return (
    <Grid p={2.5} item md={12}>
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
                          value={value || ""}
                          placeholder={keyValue.placeholder}
                          returnId={keyValue.returnId}
                          // layout="topMiddleTwo"
                          // requiredField
                        />
                      </Grid>
                    )}

                    {keyValue?.isColorBanner && (
                      <Grid item md={12} sm={12}>
                        <ColorBanner
                          label={keyValue.label}
                          handleChange={onChange}
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
                          handleInputChange={onChange}
                          value={value || ""}
                          placeholder={keyValue.placeholder}
                          returnId={keyValue.returnId}
                        />
                      </Grid>
                    )}
                    {keyValue?.isDateDropdown && (
                      <Grid item md={12} sm={12}>
                        <DateRangePicker
                          label={keyValue.label}
                          // handleChange={onChange}
                          handleChange={handleDateChange}
                          date={value || ""}
                          placeholder={keyValue.placeholder}
                          returnId={keyValue.returnId}
                        />
                      </Grid>
                    )}
                    {keyValue?.isDropdown && (
                      <Grid item md={12} sm={12}>
                        <CustomDropdown
                          label={keyValue.label}
                          handleChange={onChange}
                          value={value || ""}
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
                        <div className="shop_img1">
                          <img src={formWatchFields.shop_ad} alt="" />
                        </div>

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
              {errors && errors[keyValue?.name]?.type === "pattern" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.label} is Invalid`}
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
              btnTitle="SUBMIT"
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
      <Table
        header={header}
        rows={table}
        printer={CustomIcons.Printer1}
        view={CustomIcons.View}
        edit={CustomIcons.EditIcon}
        deleteIconSrc={CustomIcons.DeleteIcon}
        modalOpen={(id) => handleOpen(id)}
        action
        actionItem={{ view: true, deleteIcon: true, edit: true }}
        isDrop={false}
      />
      {adView && <AdView viewId={viewId} />}
    </Grid>
  );
}

export default AdScreen;
