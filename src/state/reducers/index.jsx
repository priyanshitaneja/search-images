import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import searchPhotos from './searchPhotos';
import slider from './slider';

export default combineReducers({
  searchPhotos,
  slider,
  form: reduxFormReducer
});
