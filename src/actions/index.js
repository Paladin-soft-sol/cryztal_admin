import { loginAction } from "../slices/Login/Login";
import { dashBoardAction } from "../slices/Dahboard/Dashboard";
import { masterAction } from "../slices/Master/Master";
import { customerAction } from "../slices/Customer/Customer";
import { partnerAction } from "../slices/Partner/Partner";
import { reportAction } from "../slices/Reports/Report";
import { approvalAction } from "../slices/Approval/Approval";
import { getCategoryAction } from "../slices/CategoryDropdown/Category";
import { approvalpartnerAction } from "../slices/ApprovalPartner/ApprovalPartner";
import { admasterAction } from "../slices/AdMaster/AdMaster";
import { admasterdropdownAction } from "../slices/AdMaster/AdMasterDropdown";
import { palettedropdownAction } from "../slices/AdMaster/PaletteDropdown";

const actions = {
  ...loginAction,
  ...dashBoardAction,
  ...masterAction,
  ...customerAction,
  ...partnerAction,
  ...reportAction,
  ...approvalAction,
  ...approvalpartnerAction,
  ...getCategoryAction,
  ...admasterAction,
  ...admasterdropdownAction,
  ...palettedropdownAction,

};

export default actions;
