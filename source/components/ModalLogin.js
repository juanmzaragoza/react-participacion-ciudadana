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
    console.log(show);
    return (
      <Modal show={show}>
        <Modal.Body>
          <LoginForm/>
        </Modal.Body>
      </Modal>
    )
  }
}

ModalLogin.propTypes = {
  show: PropTypes.bool
}

export default ModalLogin