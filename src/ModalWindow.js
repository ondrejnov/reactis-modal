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
		this.dispatch = null;
	}

	dispatchWindow(dispatch, modal) {
		this.dispatch = dispatch;
		this.modal = modal;
		dispatch(actions.openModal(this.modal));
	}

	hide() {
		this.dispatch(actions.closeModal(this.modal));
	}

	show(dispatch = this.dispatch) {
		const modal = <Modal className={this.className} animation={this.animation} show={true} onHide={() => this.hide()} bsStyle={this.style}>
			<Modal.Header closeButton>
				<Modal.Title>{this.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{React.cloneElement(this.text, {close:() => this.hide()})}
			</Modal.Body>
			{this.buttons &&
				<Modal.Footer>
					{this.buttons}
				</Modal.Footer>
			}
		</Modal>;
		this.dispatchWindow(dispatch, modal);
	}
}