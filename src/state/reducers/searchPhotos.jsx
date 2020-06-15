export default (state = {}, action) => {
    switch (action.type) {
      case 'SET_PHOTOS':
        return action.photos;
      default:
        return state;
    }
  };
  