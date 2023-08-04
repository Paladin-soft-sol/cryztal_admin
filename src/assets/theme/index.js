import { createTheme } from '@mui/material/styles';
import colors from '../../utils/colors';

const theme = createTheme({
	typography: {
		fontFamily: 'Roboto',
		h4: {
			fontSize: '1.5625rem', // 25px
		},
		h5: {
			fontSize: '1.25rem', // 20px
		},
		h6: {
			fontSize: '1.375rem', // 22px
		},
		subtitle1: {
			fontSize: '1.25rem', // 20px
		},
		subtitle2: {
			fontSize: '1rem', // 16px
		},
		body1: {
			fontSize: '0.875rem', // 14px
		},
		body2: {
			fontSize: '0.75rem', // 12px
		},
	},
	palette: {
		primary: {
			main: colors.blue.secondary,
			contrastText: colors.white.primary,
		},
		secondary: {
			main: colors.yellow.primary,
		},
		tertiary: {
			main: colors.white.primary,
		},
		quaternary: {
			main: colors.green.septenary,
		},
		quinary: {
			main: colors.green.octonary,
		},
		senary: {
			main: colors.violet.primary,
		},
		warning: {
			main: colors.orange.secondary,
		},
		info: {
			main: colors.blue.nonary,
		},
		success: {
			main: colors.green.senary,
		},
		disable: {
			main: colors.gray.quinary,
		},
		error: {
			main: colors.pink.tertiary,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: '1rem',
					fontFamily: 'Roboto_medium',
					textTransform: 'none',
					padding: '6px 4px',
					flexWrap: 'nowrap',
					':hover': {
						backgroundColor: '#ffc518 !important',
						transition: 'none !important',
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: 'Roboto_medium',
					lineHeight: 1.25,
				},
				caption: {},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					background: colors.white.primary,
					width: 400,
					padding: 0,
					borderRadius: 8,
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				outlined: {
					padding: 10,
				},
				root: {
					fontSize: 14,
					color: colors.gray.septenary,
				},
				icon: {
					color: colors.gray.septenary,
				},
			},
		},
		// MuiOutlinedInput: {
		// 	styleOverrides: {
		// 		input: {
		// 			padding: 12,
		// 			fontsize: 15,
		// 			color: colors.gray.tertiary,
		// 			// border: '1px solid #AEAFAF !important',
		// 		},
		// 		root: {
		// 			fontSize: '15px !important',
		// 			':focus-visible': {
		// 				outline: 'none !important',
		// 			},
		// 			':hover': {
		// 				outline: 'none !important',
		// 			},
		// 		},
		// 		notchedOutline: {
		// 			':focus-visible': {
		// 				outline: 'none !important',
		// 			},
		// 		},
		// 	},
		// },
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					fontFamily: 'Poppins_semiBold',
					color: colors.gray.tertiary,
					fontSize: '16px !important',
					border: ' 3px solid #e5e2e285!important',
					padding: '9.5px 14px !important',
					borderRadius: '6px !important',
				},
				notchedOutline: {
					':focus-visible': {
						// outline: 'none !important',
						// border: 'unset !important'
						borderColor: 'red !important',
					},
					borderWidth: '0px !important',
					borderColor: 'snow !important',
				},
				root: {
					// borderColor: colors.blue.tertiary,
					// borderRadius: '8px !important',
					':focus-visible': {
						outline: 'none !important',
					},
					// ':hover': {
					//   outline: 'none !important'
					// }
					// '& .MuiSelect-root': {
					'&.Mui-focused': {
						'&.MuiOutlinedInput-notchedOutline': {
							borderColor: 'red',
						},
					},
					// ':hover': { borderColor: 'unset' }
					// },
					paddingRight: '0px !important',
				},
			},
		},
		MuiInputAdornment: {
			styleOverrides: {
				root: {
					marginRight: '0px !important',
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					border: '1px solid white !important',
					fontSize: 12,
					WebkitTapHighlightColor: 'red !important',
				},
				multiline: {
					padding: '0px !important',
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					fontSize: 14,
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: 14,
					fontFamily: 'Roboto_medium',
					top: -4,
				},
			},
		},
		// MuiFormControlLabel: {
		// 	styleOverrides: {
		// 		root: {
		// 			marginRight: '43px',
		// 		},
		// 	},
		// },
		MuiRadio: {
			styleOverrides: {
				root: {},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontFamily: 'Roboto_medium !important',
					'&:hover': {
						backgroundColor: 'white !important',
					},
					// background: 'white !important',
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontFamily: 'Roboto_medium !important',
					fontSize: 14,
				},
			},
		},
		MuiListItemButton: {
			defaultProps: {
				disableTouchRipple: true,
			},
		},
		MuiAutocomplete: {
			styleOverrides: {
				root: {
					fontFamily: 'Roboto_medium !important',
					color: 'red',
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					color: colors.gray.septenary,
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				indicator: {
					height: '3px',
					left: '-19px !important',
					width: '86px',
				},
			},
		},
	},
});
export default theme;
