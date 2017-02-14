import React, { PropTypes } from "react";

class Formulario extends React.Component {

  constructor(props) {
      super(props);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if(this.props.submit !== undefined){
      this.props.submit();
    }
  }

  render(){
    return(
      <form className={this.props.className} onSubmit={this.handleFormSubmit.bind(this)} >
        {this.props.children}
      </form>
    )
  }

}

Formulario.propTypes = {
  submit: PropTypes.func,
  className: PropTypes.string
}

export default Formulario;