import uuid from 'uuid';

const OPEN = '@@Modal/Open';
const CLOSE = '@@Modal/Close';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case OPEN:
			var w = {
				id: uuid.v4(),
				modal: action.modal
			};
			state.push(w);
			return [...state];

		case CLOSE:
			state = state.filter(item => action.modal != item.modal);
			return [...state];

		default:
			return state;
	}
}


export function openModal(modal) {
	return {
		type: OPEN,
		modal
	};
}

export function closeModal(modal) {
	return {
		type: CLOSE,
		modal
	};
}