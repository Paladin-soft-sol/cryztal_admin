/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CustomIcons from '../icon';
import './toast.css';

function Toast(props) {
	const { toastList, position, autoDelete, autoDeleteTime } = props;
	const [list, setList] = useState(toastList);

	useEffect(() => {
		if (toastList) setList([...toastList]);
	}, [toastList]);

	const deleteToast = (id) => {
		const listItemIndex = list?.findIndex((e) => e.id === id);
		const toastListItem = toastList?.findIndex((e) => e.id === id);
		list.splice(listItemIndex, 1);
		toastList.splice(toastListItem, 1);
		setList([...list]);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			if (autoDelete && toastList.length && list.length) {
				deleteToast(toastList[0].id);
			}
		}, autoDeleteTime);

		return () => {
			clearInterval(interval);
		};

		// eslint-disable-next-line
	}, [toastList, autoDelete, autoDeleteTime, list]);
	const getToastIcon = (icon) => {
		switch (icon) {
			case 'check':
				return CustomIcons.Check;
			case 'info':
				return CustomIcons.Search;
			case 'error':
				return CustomIcons.Error;
			case 'warning':
				return CustomIcons.Warning;
			default:
				return CustomIcons.Check;
		}
	};
	const getToastBackground = (backgroundColor) => {
		switch (backgroundColor) {
			case 'check':
				return '#5cb85c';
			case 'info':
				return 'blue';
			case 'error':
				return 'red';
			case 'warning':
				return 'orange';
			default:
				return '#5cb85c';
		}
	};
	return (
		<div className={`notification-container ${position}`}>
			{list?.map((toast, i) => (
				<div
					// eslint-disable-next-line react/no-array-index-key
					key={i}
					className={`notifications toast ${position}`}
					style={{ backgroundColor: getToastBackground(toast.backgroundColor) }}
				>
					<button onClick={() => deleteToast(toast.id)}>X</button>
					<div className="notification-image">
						<img src={getToastIcon(toast?.icon)} alt="icon" />
					</div>
					<div>
						<p className="notification-title">{toast.title}</p>
						<p className="notification-message">{toast.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

Toast.propTypes = {
	toastList: PropTypes.arrayOf.isRequired,
	position: PropTypes.string.isRequired,
	autoDelete: PropTypes.bool,
	autoDeleteTime: PropTypes.number,
};
Toast.defaultProps = {
	autoDelete: false,
	autoDeleteTime: 0,
};

export default Toast;
