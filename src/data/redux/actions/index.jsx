import flickrApi from "../../../apis/flickr";

const method = 'flickr.photos.getRecent'
const api_key = '469809d930183a99561ed770e378c9d4';
const per_page = 30;
const format = 'json';
const safe_search = 1;

export const fetchPhotos = async () => {

    const response = await flickrApi.get(`/?method=${method}&api_key=${api_key}&safe_search=${safe_search}&per_page=${per_page}&format=${format}`);

    return {
        type: 'FETCH_PHOTOS',
        payload: response
    };
};