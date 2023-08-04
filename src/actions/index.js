import { loginAction } from "../slices/Login/Login";
import { dashBoardAction } from "../slices/Dahboard/Dashboard";
import { masterAction } from "../slices/Master/Master";
import { customerAction } from "../slices/Customer/Customer";
import { partnerAction } from "../slices/Partner/Partner";
import { reportAction } from "../slices/Reports/Report";
import { approvalAction } from "../slices/Approval/Approval";
import { getCategoryAction } from "../slices/CategoryDropdown/Category";
import { approvalpartnerAction } from "../slices/ApprovalPartner/ApprovalPartner";

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
};

export default actions;
