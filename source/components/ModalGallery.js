import { default as React, Component, PropTypes  } from "react";
import { connect } from 'react-redux';
import ReactDOM from "react-dom";
import { Modal ,Carousel } from "react-bootstrap";

export class ModalGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  closeModal(){

    this.setState({
      show: false
    });

    if(this.props.closeModal !== undefined){
      this.props.closeModal();
    }

  }

  openModal(){
    this.setState({
      show: true
    });
  }

  render() {

    return (
      <Modal show={this.state.show} onHide={this.closeModal.bind(this)} >

        <Carousel interval={0}>
          {this.props.images.map((imageUrl,index) => {
            return(
              <Carousel.Item key={index}>
                <img src={imageUrl} className="img-fluid img-thumbnail  " alt="Responsive image" />
              </Carousel.Item>
            )
          })}
        </Carousel>

      </Modal>
    )
  }
}

//container
const mapStateToProps = (state, ownProps) => {
    return {
      //show: true
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => {
      //dispatch(hideLoginForm());
    },
  }
}

export const ModalGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalGallery)
