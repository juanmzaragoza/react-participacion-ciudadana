import React from "react";

import Header from "../components/Layout/Header";
import MainNavigation from "../containers/MainNavigationContainer";
import Footer from "../components/Layout/Footer";
import Separator from "../components/Layout/Separator";
import { AuthStore } from '../store/AuthStore';

class App extends React.Component {

	constructor(props) {
		super(props);
		console.log(AuthStore.isAuthenticated());
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

export default App