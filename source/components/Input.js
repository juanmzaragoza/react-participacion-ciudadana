import React, { PropTypes } from "react";

class Input extends  React.Component {

  constructor(props) {
      super(props);

      this.state = {value: ""};

      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnBlur = this.handleOnBlur.bind(this);
      this.value = this.value.bind(this);
  }

  handleOnChange(e) {
    if(this.props.onChange !== undefined){
      //validar de alguna manera: e.target.value
    }
  }

  handleOnBlur(e) {
    this.setState({value: e.target.value});
    if(this.props.onBlur !== undefined){
      //validar de alguna manera: e.target.value
    }
  }

  value() {
    return this.state.value;
  }

  render() {
    return(
      <input className={this.props.className} 
        id={this.props.id}  
        name={this.props.name} 
        placeholder={this.props.placeholder} 
        type={this.props.type}
        onBlur={this.handleOnBlur}
        onChange={this.handleOnChange}  />
    )
  }

}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
}

export default Input;