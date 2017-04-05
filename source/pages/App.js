import React from "react";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Separator from "../components/Layout/Separator";
import { AuthStore } from '../store/AuthStore';

import { ModalLoginFormContainer } from "../components/ModalLogin";
import {ModalResetPasswordContainer} from "../components/ModalResetPassword"
import { MainNavigationContainer as MainNavigation } from "../components/Layout/MainNavigation";

import { connect } from 'react-redux';
import { refreshLogin } from '../actions/UserAction';

class Application extends React.Component {

	constructor(props) {
		super(props);
		if(AuthStore.isAuthenticated()){
			this.props.authenticate();
		}
	}

	render() {
		return(
			<div>
		        <Header />
		        <MainNavigation />
		        
		        {this.props.children || <Index/>}

		        <Footer />

		        <ModalLoginFormContainer />
		        <ModalResetPasswordContainer />

		    </div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticate: () => {
        dispatch(refreshLogin());
    }
  }
}

const App = connect(
  null,
  mapDispatchToProps
)(Application)

export default App