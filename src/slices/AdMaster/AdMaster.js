/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../constants";
import { fetchData } from "../../helpers";

const ADMASTER = createAsyncThunk(
  "admaster/admaster",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    // console.log(payload,"payloadpayloadpayload");
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);
const ADMASTER_CREATE = createAsyncThunk(
  "admaster/admasterCreate",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last

    payload = {},

    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);
const ADMASTER_EDIT = createAsyncThunk(
  "admaster/admasterEdit",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        `${payload?.apiName}${payload?.id}`
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const ADMASTER_DELETE = createAsyncThunk(
  "admaster/admasterDelete",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    console.log(payload, "payloadpayload");
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const ADMASTER_GET = createAsyncThunk(
  "admaster/admasterGet",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const admasterSlice = createSlice({
  name: "admasterSlice",
  initialState: {
    admaster: {
      ...defaultState.List,
    },
    admasterEdit: {
      ...defaultState.List,
    },
    admasterCreate: {
      ...defaultState.List,
    },
    admasterDelete: {
      ...defaultState.List,
    },
    admasterGet: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [ADMASTER.fulfilled]: (state, action) => {
      (state.admaster.loading = false),
        (state.admaster.error = false),
        (state.admaster = action.payload);
    },
    [ADMASTER.pending]: (state, action) => {
      (state.admaster.loading = true),
        (state.admaster.error = false),
        (state.admaster.loading = true);
    },
    [ADMASTER.rejected]: (state, action) => {
      (state.admaster.loading = false),
        (state.admaster.error = true),
        (state.admaster = action.payload);
    },
    [ADMASTER_CREATE.fulfilled]: (state, action) => {
      (state.admasterCreate.loading = false),
        (state.admasterCreate.error = false),
        (state.admasterCreate = action.payload);
    },
    [ADMASTER_CREATE.pending]: (state, action) => {
      (state.admasterCreate.loading = true),
        (state.admasterCreate.error = false),
        (state.admasterCreate.loading = true);
    },
    [ADMASTER_CREATE.rejected]: (state, action) => {
      (state.admasterCreate.loading = false),
        (state.admasterCreate.error = true),
        (state.admasterCreate = action.payload);
    },
    [ADMASTER_EDIT.fulfilled]: (state, action) => {
      (state.admasterEdit.loading = false),
        (state.admasterEdit.error = false),
        (state.admasterEdit = action.payload);
    },
    [ADMASTER_EDIT.pending]: (state, action) => {
      (state.admasterEdit.loading = true),
        (state.admasterEdit.error = false),
        (state.admasterEdit.loading = true);
    },
    [ADMASTER_EDIT.rejected]: (state, action) => {
      (state.admasterEdit.loading = false),
        (state.admasterEdit.error = true),
        (state.admasterEdit = action.payload);
    },
    [ADMASTER_DELETE.fulfilled]: (state, action) => {
      (state.admasterDelete.loading = false),
        (state.admasterDelete.error = false),
        (state.admasterDelete = action.payload);
    },
    [ADMASTER_DELETE.pending]: (state, action) => {
      (state.admasterDelete.loading = true),
        (state.admasterDelete.error = false),
        (state.admasterDelete.loading = true);
    },
    [ADMASTER_DELETE.rejected]: (state, action) => {
      (state.admasterDelete.loading = false),
        (state.admasterDelete.error = true),
        (state.admasterDelete = action.payload);
    },
    [ADMASTER_GET.fulfilled]: (state, action) => {
      (state.admasterGet.loading = false),
        (state.admasterGet.error = false),
        (state.admasterGet = action.payload);
    },
    [ADMASTER_GET.pending]: (state, action) => {
      (state.admasterGet.loading = true),
        (state.admasterGet.error = false),
        (state.admasterGet.loading = true);
    },
    [ADMASTER_GET.rejected]: (state, action) => {
      (state.admasterGet.loading = false),
        (state.admasterGet.error = true),
        (state.admasterGet = action.payload);
    },
  },
});

const admasterAction = {
  ADMASTER,
  ADMASTER_CREATE,
  ADMASTER_EDIT,
  ADMASTER_DELETE,
  ADMASTER_GET,
};
export { admasterAction };
export default admasterSlice.reducer;
