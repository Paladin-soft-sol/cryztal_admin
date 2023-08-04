/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Backdrop, Modal, Fade, Grid, Box } from '@mui/material';
import CustomIcons from '../../utils/icon';
import './termsAndCondition.css';
import actions from '../../actions';

function TermsAndConditions(props) {
	const { viewId } = props;
	console.log(viewId, 'viewId');
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
	const { masterTermsAndConditionGet } = useSelector((state) => state?.master);
	console.log(masterTermsAndConditionGet?.data?.user_type, 'tsewerwsdfasdf');
	React.useEffect(() => {
		const data = {
			data: {},
			method: 'get',
			apiName: `getTermsAndCondition/${viewId}`,
		};

		dispatch(actions.MASTER_TERMS_AND_CONDITION_GET(data));
	}, [viewId]);
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
								<img src={CustomIcons.ModalClose} alt="close" />
							</Grid>

							<Grid className="headerField">
								<div>
									<h2>Terms and conditions</h2>
								</div>
								<div className="field">
									<h1>
										{(masterTermsAndConditionGet?.data?.user_type === '1' &&
											'User') ||
											(masterTermsAndConditionGet?.data?.user_type === '2' &&
												'Partner')}
									</h1>
								</div>
							</Grid>
							<Grid height="520px" overflow="auto">
								{/* <Grid className="img_logo"> */}

								{/* <Grid>
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from a Lorem Ipsum passage, and going through the cites of the
									word in classical literature, discovered the undoubtable
									source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
									"de Finibus Bonorum et Malorum" (The Extremes of Good and
									Evil) by Cicero, written in 45 BC. This book is a treatise on
									the theory of ethics, very popular during the Renaissance. The
									first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
									comes from a line in section 1.10.32. The standard chunk of
									Lorem Ipsum used since the 1500s is reproduced below for those
									interested. Sections 1.10.32 and 1.10.33 from "de Finibus
									Bonorum et Malorum" by Cicero are also reproduced in their
									exact original form, accompanied by English versions from the
									1914 translation by H. Rackham. Contrary to popular belief,
									Lorem Ipsum is not simply random text. It has roots in a piece
									of classical Latin literature from 45 BC, making it over 2000
									years old. Richard McClintock, a Latin professor at
									Hampden-Sydney College in Virginia, looked up one of the more
									obscure Latin words, consectetur, from a Lorem Ipsum passage,
									and going through the cites of the word in classical
									literature, discovered the undoubtable source. Lorem Ipsum
									comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
									et Malorum" (The Extremes of Good and Evil) by Cicero, written
									in 45 BC. This book is a treatise on the theory of ethics,
									very popular during the Renaissance. The first line of Lorem
									Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
									section 1.10.32. The standard chunk of Lorem Ipsum used since
									the 1500s is reproduced below for those interested. Sections
									1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
									Cicero are also reproduced in their exact original form,
									accompanied by English versions from the 1914 translation by
									H. Rackham. Contrary to popular belief, Lorem Ipsum is not
									simply random text. It has roots in a piece of classical Latin
									literature from 45 BC, making it over 2000 years old. Richard
									McClintock, a Latin professor at Hampden-Sydney College in
									Virginia, looked up one of the more obscure Latin words,
									consectetur, from a Lorem Ipsum passage, and going through the
									cites of the word in classical literature, discovered the
									undoubtable source. Lorem Ipsum comes from sections 1.10.32
									and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
									of Good and Evil) by Cicero, written in 45 BC. This book is a
									treatise on the theory of ethics, very popular during the
									Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
									sit amet..", comes from a line in section 1.10.32. The
									standard chunk of Lorem Ipsum used since the 1500s is
									reproduced below for those interested. Sections 1.10.32 and
									1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
									also reproduced in their exact original form, accompanied by
									English versions from the 1914 translation by H. Rackham.
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from a Lorem Ipsum passage, and going through the cites of the
									word in classical literature, discovered the undoubtable
									source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
									"de Finibus Bonorum et Malorum" (The Extremes of Good and
									Evil) by Cicero, written in 45 BC. This book is a treatise on
									the theory of ethics, very popular during the Renaissance. The
									first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
									comes from a line in section 1.10.32. The standard chunk of
									Lorem Ipsum used since the 1500s is reproduced below for those
									interested. Sections 1.10.32 and 1.10.33 from "de Finibus
									Bonorum et Malorum" by Cicero are also reproduced in their
									exact original form, accompanied by English versions from the
									1914 translation by H. Rackham. Contrary to popular belief,
									Lorem Ipsum is not simply random text. It has roots in a piece
									of classical Latin literature from 45 BC, making it over 2000
									years old. Richard McClintock, a Latin professor at
									Hampden-Sydney College in Virginia, looked up one of the more
									obscure Latin words, consectetur, from a Lorem Ipsum passage,
									and going through the cites of the word in classical
									literature, discovered the undoubtable source. Lorem Ipsum
									comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
									et Malorum" (The Extremes of Good and Evil) by Cicero, written
									in 45 BC. This book is a treatise on the theory of ethics,
									very popular during the Renaissance. The first line of Lorem
									Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
									section 1.10.32. The standard chunk of Lorem Ipsum used since
									the 1500s is reproduced below for those interested. Sections
									1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
									Cicero are also reproduced in their exact original form,
									accompanied by English versions from the 1914 translation by
									H. Rackham. Contrary to popular belief, Lorem Ipsum is not
									simply random text. It has roots in a piece of classical Latin
									literature from 45 BC, making it over 2000 years old. Richard
									McClintock, a Latin professor at Hampden-Sydney College in
									Virginia, looked up one of the more obscure Latin words,
									consectetur, from a Lorem Ipsum passage, and going through the
									cites of the word in classical literature, discovered the
									undoubtable source. Lorem Ipsum comes from sections 1.10.32
									and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
									of Good and Evil) by Cicero, written in 45 BC. This book is a
									treatise on the theory of ethics, very popular during the
									Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
									sit amet..", comes from a line in section 1.10.32. The
									standard chunk of Lorem Ipsum used since the 1500s is
									reproduced below for those interested. Sections 1.10.32 and
									1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
									also reproduced in their exact original form, accompanied by
									English versions from the 1914 translation by H. Rackham.
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from a Lorem Ipsum passage, and going through the cites of the
									word in classical literature, discovered the undoubtable
									source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
									"de Finibus Bonorum et Malorum" (The Extremes of Good and
									Evil) by Cicero, written in 45 BC. This book is a treatise on
									the theory of ethics, very popular during the Renaissance. The
									first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
									comes from a line in section 1.10.32. The standard chunk of
									Lorem Ipsum used since the 1500s is reproduced below for those
									interested. Sections 1.10.32 and 1.10.33 from "de Finibus
									Bonorum et Malorum" by Cicero are also reproduced in their
									exact original form, accompanied by English versions from the
									1914 translation by H. Rackham.
								</Grid> */}

								<Grid className="para">
									{masterTermsAndConditionGet?.data?.terms_and_condition}
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
