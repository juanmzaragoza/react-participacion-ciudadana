import React, { PropTypes } from "react";

class TextArea extends  React.Component {

  constructor(props) {
      super(props);

      this.state = {value: ""};

      this.value = this.value.bind(this);
  }

  handleOnBlur(e) {
    this.setState({value: e.target.value});
  }

  value() {
    return this.state.value;
  }

  render() {
    return(
      <textarea className={this.props.className} 
        id={this.props.id}  
        name={this.props.name} 
        placeholder={this.props.placeholder} 
        rows={this.props.rows}
        onBlur={this.handleOnBlur.bind(this)}  />
    )
  }

}

TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  row: PropTypes.number,
}

export default TextArea;