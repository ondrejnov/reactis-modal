import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import * as actions from './reducer';
import Window from './Window';

export default class ModalWindow extends Window
{
	constructor(title, text, buttons, style) {
		super(title, text, style);
		this.buttons = buttons;
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
		const modal = <Modal animation={false} show={true} onHide={() => this.hide()} bsStyle={this.style}>
			<Modal.Header closeButton>
				<Modal.Title>{this.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div style={{padding: '20px 5px'}}>
					{this.text}
				</div>
			</Modal.Body>
			<Modal.Footer>
				{this.buttons}
			</Modal.Footer>
		</Modal>;
		this.dispatch(dispatch, modal);
	}
}