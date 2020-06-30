import * as actionTypes from "../../config/utils/constants";
import flickrApi from "../../../apis/flickr";
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
    return { // this action will be sent
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



// export const fetchPhotos = () => {

//     return async (dispatch) => {
//         const response = await flickrApi.get(`/?method=${method}&api_key=${api_key}&safe_search=${safe_search}&per_page=${per_page}&format=${format}`);

//         // return {
//         //     type: 'FETCH_PHOTOS',
//         //     payload: promise
//         // };

//         dispatch({ type: 'FETCH_PHOTOS', payload: response })
//     }
// };

export const fetchPhotos = () => {   //This is the main one to fetch photos
    return dispatch => {
        dispatch(fetchPhotosStart()); //The one you called is called inside this anyway, we don't even need to export upar vaale functions, Idk if I did or not but you dont have to
        axios.get('https://www.flickr.com/services/rest', { params })
            .then(({ data }) => { //If this is called, it means we have the photos
                dispatch(fetchPhotosSuccess(data.photos.photo));
            })
            .catch(err => { //Error case
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

        flickrApi.get({ params })
            .then(({ data }) => {
                dispatch(searchPhotosSuccess(data.photos.photo));
            })
            .catch(error => {
                dispatch(searchPhotosFail(error));
            })
    }
}
