import { ModalState } from '@ladders/core/state/modal/reducer';
import { SessionState } from 'http2';

export interface GlobalState {
  modal: ModalState;
  session: SessionState;
}
