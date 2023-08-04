import CustomIcons from '../../utils/icon';

const entries = [
	{
		textField: true,
		entryName: 'user_name',
		label: 'Username',
		placeholder: 'Email',
		type: 'text',
		iconSource: CustomIcons.Mail,
		pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
		validation: {
			isRequired: true,
		},
	},
	{
		textField: true,
		entryName: 'password',
		label: 'Password',
		iconSource: CustomIcons.Password,
		placeholder: 'Password',
		type: 'password',
		validation: {
			isRequired: true,
		},
	},
];
export default entries;
