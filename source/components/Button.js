import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import {  checkIfUserIsSubscribed, subscribe, unsubscribe } from '../actions/SubscriptionAction';
import { showLoginForm } from '../actions/UserAction';

export class Button extends React.Component {

	constructor(props) {
  		super(props);
 	}

 	componentWillMount() {
 		if(this.props.componentWillMount !== undefined){
 			this.props.componentWillMount();
 		}
 	}

 	componentDidUpdate(prevProps, prevState){
 		if(this.props.componentDidUpdate !== undefined && this.props.userIsAuthenticated !== prevProps.userIsAuthenticated){
 			this.props.componentDidUpdate();	
 		}
 	}

 	shouldComponentUpdate(nextProps, nextState) {
 		return ((this.props.userIsAuthenticated !== nextProps.userIsAuthenticated) || (this.props.text !== nextProps.text));
 	}

 	render(){
 		return (
  			<button className={this.props.className} onClick={ e => {this.props.handleOnClick(this.props.userIsAuthenticated)}}>
  				{this.props.text}
  			</button>
  		)
	}
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  userIsAuthenticated: PropTypes.bool.isRequired,
  componentWillMount: PropTypes.func,
  componentDidUpdate: PropTypes.func,
  handleOnClick: PropTypes.func
}

//container
const mapStateToProps = (state, ownProps) => {
    return {
        text: state.result.content.suscripto? "Anular suscripcion":"Suscribirse",
        className: "btn btn-vt",
        userIsAuthenticated: state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidUpdate: () => {
      dispatch(checkIfUserIsSubscribed(ownProps.id,ownProps.type))
    },
    handleOnClick(userIsAuthenticated){
      if(userIsAuthenticated){
      	dispatch(subscribe(ownProps.id,ownProps.type));
      } else{
      	dispatch(showLoginForm());
      }
      
    }
  }
}

export const ButtonSubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)