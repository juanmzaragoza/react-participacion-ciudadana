import React, { PropTypes } from "react";

class ModalFade extends React.Component {

  constructor(props) {
      super(props);
  }

  render(){
    return(
      <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

ModalFade.propTypes = {
  id: PropTypes.string.isRequired
}

export default ModalFade