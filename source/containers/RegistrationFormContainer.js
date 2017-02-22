import { connect } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import { fetchNeighborhoods } from '../actions/NeighborhoodAction';
import { createUser } from '../actions/UserAction';

const mapStateToProps = (state, ownProps) => {
    return {
    	neighborhoods: state.registrationForm.neighborhoods,
      submitError: state.registrationForm.submitError.state? state.registrationForm.submitError.message:false,
      submitSucess: state.registrationForm.submitSucess.state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      //limpiar estado del formulario
    },
    getNeighborhoods: () => {
      dispatch(fetchNeighborhoods(1, 50));
    },
    onSubmit: (formValues) => {
      dispatch(createUser(formValues));
    }
  }
}

const RegistrationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default RegistrationFormContainer