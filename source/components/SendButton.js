import React from "react";
import PropTypes from "prop-types";

class SendButton extends React.Component {
  
  constructor(props) {
      super(props);
  }

  handleOnClick(e){
    if(this.props.onClick !== undefined){
      this.props.onClick(e);
    }
  }

  render(){

    const button = this.props.button !== undefined && this.props.button? <button type="submit" className={this.props.className}>{this.props.value}</button>:<input type="submit" className={this.props.className} value={this.props.value} readOnly onClick={this.handleOnClick.bind(this)} />;
    return(
      button
    )
  }
}

SendButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  button: PropTypes.bool,
}

export default SendButton;