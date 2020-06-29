export const selectedPhoto = (selectedPhoto = null, action) => {

    if (action.type === 'IMAGE_SELECTED') {
        return action.payload;
    }
    return selectedPhoto;
};
