import * as actionTypes from "../../config/utils/constants";
import axios from "axios";

// const method = 'flickr.photos.getRecent';

const params = {
    api_key: "469809d930183a99561ed770e378c9d4",
    format: 'json',
    method: `flickr.photos.getRecent`,
    nojsoncallback: 1,
    per_page: 100,
    safe_search: 1
}

export const fetchPhotosStart = () => {
    return {
        type: actionTypes.FETCH_PHOTOS_START
    };
};

export const fetchPhotosSuccess = (photos) => {
    return {
        type: actionTypes.FETCH_PHOTOS_SUCCESS,
        photos
    }
}

export const fetchPhotosFail = (error) => {
    return {
        type: actionTypes.FETCH_PHOTOS_FAIL,
        error
    }
}

export const fetchMorePhotosStart = () => {
    return {
        type: actionTypes.FETCH_MORE_PHOTOS_START
    };
};

export const fetchMorePhotosSuccess = (photos) => {
    return {
        type: actionTypes.FETCH_MORE_PHOTOS_SUCCESS,
        photos
    }
}

export const fetchMorePhotosFail = (error) => {
    return {
        type: actionTypes.FETCH_MORE_PHOTOS_FAIL,
        error
    }
}

export const searchPhotosStart = () => {
    return {
        type: actionTypes.SEARCH_PHOTOS_START
    };
};

export const searchPhotosSuccess = (photos) => {
    return {
        type: actionTypes.SEARCH_PHOTOS_SUCCESS,
        photos
    }
}

export const searchPhotosFail = (error) => {
    return {
        type: actionTypes.SEARCH_PHOTOS_FAIL,
        error
    }
}

export const fetchPhotos = () => { 
    return dispatch => {
        dispatch(fetchPhotosStart()); 
            axios.get('https://www.flickr.com/services/rest', { params })
            .then(({ data }) => {
                dispatch(fetchPhotosSuccess(data.photos.photo));
            })
            .catch(err => {
                dispatch(fetchPhotosFail(err));
            })
    };
}

export const fetchMorePhotos = () => {
    return dispatch => {
        dispatch(fetchMorePhotosStart());
        axios.get('https://www.flickr.com/services/rest', { params })
            .then(({ data }) => {
                dispatch(fetchMorePhotosSuccess(data.photos.photo));
            })
            .catch(err => {
                dispatch(fetchMorePhotosFail(err));
            })
    };
}

export const searchPhotos = (text) => {
    return dispatch => {
        dispatch(searchPhotosStart());
        let params = {
            api_key: "469809d930183a99561ed770e378c9d4",
            format: 'json',
            method: `flickr.photos.search`,
            nojsoncallback: 1,
            per_page: 100,
            tags: `${text}`,
            safe_search: 1
        }

        axios.get('https://www.flickr.com/services/rest', { params })
            .then(({ data }) => {
                dispatch(searchPhotosSuccess(data.photos.photo));
            })
            .catch(error => {
                dispatch(searchPhotosFail(error));
            })
    }
}
