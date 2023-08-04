import { React } from 'react';
import { Grid } from '@mui/material';
import ReportModal from './Report';

function ReportView() {
	return (
		<Grid container item md={12}>
			<Grid item md={12} display="flex">
				<Grid item md={12}>
					<ReportModal />
				</Grid>
			</Grid>
		</Grid>
	);
}
export default ReportView;
