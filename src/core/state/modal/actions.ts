import { Action } from '@ladders/core/models/action';

export const MODAL_OPENED = 'modal.MODAL_OPENED';
export interface ModalOpened extends Action<typeof MODAL_OPENED> {
  content?: React.ComponentType;
}
export function showModal(content: React.ComponentType): ModalOpened {
  return {
    type: MODAL_OPENED,
    content,
  };
}

export type ModalActions = (ModalOpened);
