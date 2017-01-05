import { default as React, Component } from "react";

class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		return (
			<main className="main-container" role="main">
				<div className="container">
		    		{this.props.children}
		    	</div>
			</main>
		)
	}
}

export default Main