import { ModalRootPresentation, ReduxStateProps } from '@ladders/core/components/modal-root/component';
import { GlobalState } from '@ladders/core/models/global-state';
import { connect } from 'react-redux';

const mapStateToProps = (state: GlobalState): ReduxStateProps => {
  return {
    content: state.modal.content,
  };
};

export const ModalRoot = connect(mapStateToProps)(ModalRootPresentation);
