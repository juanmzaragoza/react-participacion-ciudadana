import { default as React, Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Recaptcha from 'react-recaptcha';

const config = require('config/config');

import { resetLoginCaptcha, verifyLoginCaptcha } from 'actions/UserAction';

export class Captcha extends React.Component {

  constructor(props) {
    super(props);
  }

  onLoadCaptcha(){
    if(this.props.onLoad !== undefined){
      this.props.onLoad();
    }
  }

  onVerifyCaptcha(response){
    if(this.props.onVerify !== undefined){
      this.props.onVerify(response);
    }
  }

  componentDidUpdate(){
    if(this.props.errorSubmit || this.props.errorCaptcha){
      this.refs.recaptchaInstance.reset(); //reseteo el captcha
      this.props.onLoad(); //reinicio su estado
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.errorSubmit != this.props.errorSubmit || nextProps.errorCaptcha != this.props.errorCaptcha);
  }

  render() {
    return (
      <Recaptcha 
        ref={"recaptchaInstance"}
        sitekey={config.google.captcha_site_key}
        render="explicit"
        onloadCallback={this.onLoadCaptcha.bind(this)}
        verifyCallback={this.onVerifyCaptcha.bind(this)} />
    )
  }

}

//////////////////////////////////////////////////////////////
//container login captcha
//////////////////////////////////////////////////////////////
const mapStateToProps = (state, ownProps) => {
    return {
      errorCaptcha: state.captcha.error,
      errorSubmit: state.user.loginFailed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(resetLoginCaptcha());
    },
    onVerify: (response) => {
      dispatch(verifyLoginCaptcha(response));
    }
  }
}

export const LoginCaptcha = connect(
  mapStateToProps,
  mapDispatchToProps
)(Captcha)

//////////////////////////////////////////////////////////////
//container registration captcha
//////////////////////////////////////////////////////////////
const mapRegStateToProps = (state, ownProps) => {
    return {
      errorCaptcha: state.captcha.error,
      errorSubmit: state.registrationForm.submitError.state
    }
}

export const RegistrationCaptcha = connect(
  mapRegStateToProps,
  mapDispatchToProps
)(Captcha)

//////////////////////////////////////////////////////////////
//container change password captcha
//////////////////////////////////////////////////////////////
const mapChangePasswordStateToProps = (state, ownProps) => {
    return {
      errorCaptcha: state.captcha.error,
      errorSubmit: state.changePasswordForm.errorMessage
    }
}

export const ModalResetPasswordCaptcha = connect(
  mapChangePasswordStateToProps,
  mapDispatchToProps
)(Captcha)
