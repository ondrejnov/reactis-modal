import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import ModalWindow from './ModalWindow';

export default class ConfirmWindow extends ModalWindow
{
	constructor(title, text, style) {
		super(title, text, null, style);
		this.lang = {
			ok: 'OK',
			cancel: 'Storno'
		}
	}

	handleHide(callback) {
		this.hide();
		if (callback) {
			callback();
		}
	}

	show(dispatch, okCallback, cancelCallback) {
		const modal = <Modal animation={true} show={true} onHide={() => this.handleHide(cancelCallback)} bsStyle={this.style}>
			<Modal.Header closeButton>
				<Modal.Title>{this.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div style={{padding: '20px 5px'}}>
					{this.text}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => this.handleHide(cancelCallback)} bsStyle="link">{this.lang.cancel}</Button>
				<Button onClick={() => this.handleHide(okCallback)} bsStyle="primary">{this.lang.ok}</Button>
			</Modal.Footer>
		</Modal>;
		this.dispatchWindow(dispatch, modal);
	}
}