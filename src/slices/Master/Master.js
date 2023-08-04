/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../constants";
import { fetchData } from "../../helpers";

const MASTER = createAsyncThunk(
  "master/master",
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
const MASTER_CREATE = createAsyncThunk(
  "master/masterCreate",
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
const MASTER_EDIT = createAsyncThunk(
  "master/masterEdit",
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

const MASTER_DELETE = createAsyncThunk(
  "master/masterDelete",
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

const MASTER_GET = createAsyncThunk(
  "master/masterGet",
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

const MASTER_TERMS_AND_CONDITION_GET = createAsyncThunk(
  "master/masterTermsAndConditionGet",
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
        `${payload?.apiName}`
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
const MASTER_PRIVACY_AND_POLICY_GET = createAsyncThunk(
  "master/masterPrivacyAndPolicyGet",
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
        `${payload?.apiName}`
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
const masterSlice = createSlice({
  name: "masterSlice",
  initialState: {
    master: {
      ...defaultState.List,
    },
    masterEdit: {
      ...defaultState.List,
    },
    masterCreate: {
      ...defaultState.List,
    },
    masterDelete: {
      ...defaultState.List,
    },
    masterGet: {
      ...defaultState.List,
    },
    masterTermsAndConditionGet: {
      ...defaultState.List,
    },
    masterPrivacyAndPolicyGet: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [MASTER.fulfilled]: (state, action) => {
      (state.master.loading = false),
        (state.master.error = false),
        (state.master = action.payload);
    },
    [MASTER.pending]: (state, action) => {
      (state.master.loading = true),
        (state.master.error = false),
        (state.master.loading = true);
    },
    [MASTER.rejected]: (state, action) => {
      (state.master.loading = false),
        (state.master.error = true),
        (state.master = action.payload);
    },
    [MASTER_CREATE.fulfilled]: (state, action) => {
      (state.masterCreate.loading = false),
        (state.masterCreate.error = false),
        (state.masterCreate = action.payload);
    },
    [MASTER_CREATE.pending]: (state, action) => {
      (state.masterCreate.loading = true),
        (state.masterCreate.error = false),
        (state.masterCreate.loading = true);
    },
    [MASTER_CREATE.rejected]: (state, action) => {
      (state.masterCreate.loading = false),
        (state.masterCreate.error = true),
        (state.masterCreate = action.payload);
    },
    [MASTER_EDIT.fulfilled]: (state, action) => {
      (state.masterEdit.loading = false),
        (state.masterEdit.error = false),
        (state.masterEdit = action.payload);
    },
    [MASTER_EDIT.pending]: (state, action) => {
      (state.masterEdit.loading = true),
        (state.masterEdit.error = false),
        (state.masterEdit.loading = true);
    },
    [MASTER_EDIT.rejected]: (state, action) => {
      (state.masterEdit.loading = false),
        (state.masterEdit.error = true),
        (state.masterEdit = action.payload);
    },
    [MASTER_DELETE.fulfilled]: (state, action) => {
      (state.masterDelete.loading = false),
        (state.masterDelete.error = false),
        (state.masterDelete = action.payload);
    },
    [MASTER_DELETE.pending]: (state, action) => {
      (state.masterDelete.loading = true),
        (state.masterDelete.error = false),
        (state.masterDelete.loading = true);
    },
    [MASTER_DELETE.rejected]: (state, action) => {
      (state.masterDelete.loading = false),
        (state.masterDelete.error = true),
        (state.masterDelete = action.payload);
    },
    [MASTER_GET.fulfilled]: (state, action) => {
      (state.masterGet.loading = false),
        (state.masterGet.error = false),
        (state.masterGet = action.payload);
    },
    [MASTER_GET.pending]: (state, action) => {
      (state.masterGet.loading = true),
        (state.masterGet.error = false),
        (state.masterGet.loading = true);
    },
    [MASTER_GET.rejected]: (state, action) => {
      (state.masterGet.loading = false),
        (state.masterGet.error = true),
        (state.masterGet = action.payload);
    },
    [MASTER_TERMS_AND_CONDITION_GET.fulfilled]: (state, action) => {
      (state.masterTermsAndConditionGet.loading = false),
        (state.masterTermsAndConditionGet.error = false),
        (state.masterTermsAndConditionGet = action.payload);
    },
    [MASTER_TERMS_AND_CONDITION_GET.pending]: (state, action) => {
      (state.masterTermsAndConditionGet.loading = true),
        (state.masterTermsAndConditionGet.error = false),
        (state.masterTermsAndConditionGet.loading = true);
    },
    [MASTER_TERMS_AND_CONDITION_GET.rejected]: (state, action) => {
      (state.masterTermsAndConditionGet.loading = false),
        (state.masterTermsAndConditionGet.error = true),
        (state.masterTermsAndConditionGet = action.payload);
    },
    [MASTER_PRIVACY_AND_POLICY_GET.fulfilled]: (state, action) => {
      (state.masterPrivacyAndPolicyGet.loading = false),
        (state.masterPrivacyAndPolicyGet.error = false),
        (state.masterPrivacyAndPolicyGet = action.payload);
    },
    [MASTER_PRIVACY_AND_POLICY_GET.pending]: (state, action) => {
      (state.masterPrivacyAndPolicyGet.loading = true),
        (state.masterPrivacyAndPolicyGet.error = false),
        (state.masterPrivacyAndPolicyGet.loading = true);
    },
    [MASTER_PRIVACY_AND_POLICY_GET.rejected]: (state, action) => {
      (state.masterPrivacyAndPolicyGet.loading = false),
        (state.masterPrivacyAndPolicyGet.error = true),
        (state.masterPrivacyAndPolicyGet = action.payload);
    },
  },
});

const masterAction = {
  MASTER,
  MASTER_CREATE,
  MASTER_EDIT,
  MASTER_DELETE,
  MASTER_GET,
  MASTER_TERMS_AND_CONDITION_GET,
  MASTER_PRIVACY_AND_POLICY_GET,
};
export { masterAction };
export default masterSlice.reducer;
