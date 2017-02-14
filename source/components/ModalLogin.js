import { default as React, Component, PropTypes  } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import LoginForm from "../containers/MainNavigationFormContainer";

class ModalLogin extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var show = this.props.show? true:false;
    return (
      <Modal show={show}>
        <Modal.Header>
          <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
            <span aria-hidden="true">×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <LoginForm/>
        </Modal.Body>
      </Modal>
    )
  }
}

ModalLogin.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func
}

export default ModalLogin