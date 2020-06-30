// import { combineReducers } from 'redux';
// // // import { reducer as reduxFormReducer } from 'redux-form';
// // import { searchPhotos } from './searchPhotos';
// // import { selectedPhoto } from './selectedPhoto';

// export default combineReducers({
//   xyz: () => "hi"
//   // photos: searchPhotos
//   // selectedPhoto: selectedPhoto,
//   // form: reduxFormReducer
// });


import * as actionTypes from "../../config/utils/constants";

const initialState = {
  photos: [],
  loading: false,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PHOTOS_START:
      return {
        ...state,   //bas loading true ho jaayegi, no use
        loading: true
      }

    case actionTypes.FETCH_PHOTOS_SUCCESS:
      return { //So, here we do whatever we want with those photos
        ...state,
        photos: action.photos,
        loading: false
      }
    case actionTypes.FETCH_PHOTOS_FAIL:
      return { //here
        ...state,
        loading: false,
        error: action.error
      }
    case actionTypes.SEARCH_PHOTOS_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        loading: false
      }
    case actionTypes.SEARCH_PHOTOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case actionTypes.FETCH_MORE_PHOTOS_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_MORE_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: state.photos.concat(action.photos),
        loading: false
      }
    case actionTypes.FETCH_MORE_PHOTOS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
};

export default reducer;
