import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slices/Login/Login';
import dashboardSlice from '../slices/Dahboard/Dashboard';
import masterSlice from '../slices/Master/Master';
import customerSlice from '../slices/Customer/Customer';
import partnerSlice from '../slices/Partner/Partner';
import reportSlice from '../slices/Reports/Report';
import approvalSlice from '../slices/Approval/Approval';
import getCategorySlice from '../slices/CategoryDropdown/Category';
import approvalpartnerSlice from '../slices/ApprovalPartner/ApprovalPartner';
import admasterSlice from '../slices/AdMaster/AdMaster';
import admasterdropdownSlice from '../slices/AdMaster/AdMasterDropdown';
import palettedropdownSlice from '../slices/AdMaster/PaletteDropdown';


const reducer = combineReducers({
	login: loginSlice,
	dashboard: dashboardSlice,
	master: masterSlice,
	customer: customerSlice,
	partner: partnerSlice,
	report: reportSlice,
	admasterdropdown: admasterdropdownSlice,
	palettedropdown: palettedropdownSlice,

	approval: approvalSlice,
	categoryDropdown: getCategorySlice,
	approvalpartner: approvalpartnerSlice,
	admaster: admasterSlice
});

const store = configureStore({
	reducer,
});
export default store;
