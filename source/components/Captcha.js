import { default as React, Component, PropTypes  } from "react";
import { connect } from 'react-redux';
import Recaptcha from 'react-recaptcha';

const config = require('../config/config');

import { resetLoginCaptcha, verifyLoginCaptcha } from '../actions/UserAction';

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

//container
const mapStateToProps = (state, ownProps) => {
    return {
      error: state.loginForm.captcha.error
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