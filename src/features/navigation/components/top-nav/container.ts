import { showModal } from '@ladders/core/state/modal/actions';
import { ReduxDispatchProps, TopNavPresentation } from '@ladders/features/navigation/components/top-nav/component';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    showModal: (content) => dispatch(showModal(content)),
  };
};

export const TopNav = connect(null, mapDispatchToProps)(TopNavPresentation);
