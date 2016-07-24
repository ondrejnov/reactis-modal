import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import ModalWindow from './ModalWindow';

export default class AlertWindow extends ModalWindow
{
	constructor(title, text, style) {
		super(title, text, null, style);
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
							<Button onClick={() => this.hide()} bsStyle="primary">OK</Button>
						</Modal.Footer>
					</Modal>;
		this.dispatchWindow(dispatch, modal);
	}
}