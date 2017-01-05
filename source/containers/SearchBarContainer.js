import { connect } from 'react-redux'
import {  searchItems } from '../actions'
import SearchBar from '../components/SearchBar'
import {  browserHistory } from 'react-router'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearch: (text) => {
      	//dispatch(searchItems(text))
      	browserHistory.push('/resultados?nombre='+text)
    }
  }
}

const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer