export default (state = '', action) => {
    switch (action.type) {
      case 'SET_FETCH_ERROR':
        return action.error.message;
      default:
        return state;
    }
  };
  