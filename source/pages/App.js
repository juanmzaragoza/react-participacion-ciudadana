import React from "react";

import Header from "../components/Layout/Header";
import MainNavigation from "../containers/MainNavigationContainer";
import Footer from "../components/Layout/Footer";
import Separator from "../components/Layout/Separator";
import { AuthStore } from '../store/AuthStore';

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
		        
		        <Separator />
		        
		        {this.props.children || <Index/>}

		        <Footer />
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