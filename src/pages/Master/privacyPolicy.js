/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Backdrop, Modal, Fade, Grid, Box } from '@mui/material';
import CustomIcons from '../../utils/icon';
import './privacyPolicy.css';
import actions from '../../actions';

function TermsAndConditions(props) {
	const { privacyviewid } = props;
	console.log(privacyviewid, 'privacyviewid');
	const dispatch = useDispatch();

	const [open, setOpen] = useState(true);
	const handleClose = () => setOpen(false);
	const style = {
		position: 'absolute',
		top: '6%',
		left: '7%',
		right: '7%',
		width: '86%',
		height: 700,
		p: 4,
		// position: 'absolute',
		// top: '13%',
		// left: '7%',
		// right: '7%',
		// width: '86%',
		// height: 595,
		// p: 4,
	};
	const { masterPrivacyAndPolicyGet } = useSelector((state) => state?.master);
	console.log(
		masterPrivacyAndPolicyGet?.data?.type,
		'masterPrivacyAndPolicyGet'
	);
	React.useEffect(() => {
		const data = {
			data: {},
			method: 'get',
			apiName: `getPrivacyPolicyById/${privacyviewid}`,
		};

		dispatch(actions.MASTER_PRIVACY_AND_POLICY_GET(data));
	}, [privacyviewid]);
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 100,
			}}
		>
			<Fade in={open}>
				<Box className="modalBox" sx={style}>
					<Grid item display="block" alignItems="center">
						<div>
							<Grid className="closeIcon" onClick={handleClose}>
								<div>
									<img src={CustomIcons.ModalClose} alt="close" />
								</div>
							</Grid>

							<Grid className="headerField">
								<div>
									<h2>Privacy Policy</h2>
								</div>
								<div className="field">
									<h1>
										{(masterPrivacyAndPolicyGet?.data?.type === 1 && 'User') ||
											(masterPrivacyAndPolicyGet?.data?.type === 2 &&
												'Partner')}
									</h1>
								</div>
							</Grid>
							<Grid height="520px" overflow="auto">
								<Grid className="para">
									{masterPrivacyAndPolicyGet?.data?.privacy_and_policy}
								</Grid>
							</Grid>
						</div>
					</Grid>
				</Box>
			</Fade>
		</Modal>
	);
}
export default TermsAndConditions;
