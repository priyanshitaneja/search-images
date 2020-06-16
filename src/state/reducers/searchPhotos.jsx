export const searchPhotos (state = {}, action) => {
    if(action.type ==='SET_PHOTOS')
        return action.photos;
    return state;
};
  