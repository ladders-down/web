import * as React from 'react';
import Modal from 'react-modal';

interface PublicProps {}

export interface ReduxStateProps {
  content?: React.ComponentType;
}

type Props = PublicProps & ReduxStateProps;

export class ModalRootPresentation extends React.Component<Props> {
  public render() {
    if (!this.props.content) {
      return null;
    }

    return (
      <Modal
        isOpen={!!this.props.content}
      >
        {React.createElement(this.props.content)}
      </Modal>
    );
  }
}
