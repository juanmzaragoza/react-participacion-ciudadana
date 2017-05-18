import * as types from 'constants/RequestActionTypes'

const initialState = {
  isFetching: false,
  errorRequest: false,
  images: []
}

export default function headerSection(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_IMAGES_GALLERY:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })
    case types.REQUEST_IMAGES_GALLERY_SUCCESS:
      let images = [];
      action.images.forEach(function(image){
        images.push(image.image);
      })
      return Object.assign({}, state, {
        images: images
      })
    case types.REQUEST_IMAGES_GALLERY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })
    default:
      return state;
  }
}

