import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import * as actions from './reducer';
import Window from './Window';

export default class ModalWindow extends Window
{
	constructor(title, text, buttons, style) {
		super(title, text, style);
		this.buttons = buttons;
		this.animation = true;
	}

	hide() {
		this.dispatch(actions.closeModal(this.modal));
	}

	dispatch(dispatch, modal) {
		this.dispatch = dispatch;
		this.modal = modal;
		dispatch(actions.openModal(this.modal));
	}

	show(dispatch) {
		const modal = <Modal animation={this.animation} show={true} onHide={() => this.hide()} bsStyle={this.style}>
			<Modal.Header closeButton>
				<Modal.Title>{this.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{this.text}
			</Modal.Body>
			<Modal.Footer>
				{this.buttons}
			</Modal.Footer>
		</Modal>;
		this.dispatch(dispatch, modal);
	}
}