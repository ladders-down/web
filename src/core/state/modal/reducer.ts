import { MODAL_OPENED, ModalActions } from '@ladders/core/state/modal/actions';
import { Reducer } from 'redux';

export interface ModalState {
  content?: React.ComponentType;
}

const initialState: ModalState = {};

export const modalReducer: Reducer<ModalState, ModalActions> = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPENED:
      return {
        state,
        content: action.content,
      };
    default:
      return state;
  }
};
