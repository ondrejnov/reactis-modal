import React from 'react';
import {connect} from 'react-redux';

import {Modal, Button} from 'react-bootstrap';
@connect(
	(state) => {
		return {
			windows: state.modals
		};
	})
export default class ModalWindowContainer extends React.Component {

	render() {
		return <span>
					{this.props.windows.map(item => {return <span key={item.id}>{item.modal}</span>})}
			   </span>
	}
};
