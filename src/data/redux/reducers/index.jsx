import { combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import { searchPhotos } from './searchPhotos';
import { selectedPhoto } from './selectedPhoto';

export default combineReducers({
  photos: searchPhotos,
  selectedPhoto: selectedPhoto,
  // form: reduxFormReducer
});