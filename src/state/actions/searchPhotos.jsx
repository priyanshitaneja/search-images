import axios from "axios";

export const setPhotos = photos => ({
    type: 'SET_PHOTOS',
    photos,
});

const getPhotoURL = (photo) => {
    const { id, farm, secret, server } = photo;
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
}

export const searchPhotos = store => (dispatch) => {
    fetchPhotos(dispatch, store);
};

export const fetchPhotos = (tag, action) => {
    // tag = inputRef.current.value
    console.log(tag)

    const method = !tag ? 'flickr.photos.search' : 'flickr.photos.getRecent';

    axios({
        method: 'GET',
        url: `https://www.flickr.com/services/rest/?method=${method}&api_key=${api_key}&safe_search=${safe_search}&per_page=${per_page}&format=${format}&tags=${tag}`
    }).then(response => {
        if (action) action();
        if (response.data.photos && response.data.photos.photo) {
            const images = ImagesList(response.data.photos.photo)
            this.setImages(prevImages => {
                return {
                    images: [...prevImages, images]
                }
            })
        }
    }).catch(error => {
        this.showMessage(error, 'Something went wrong, Please try again!');
    });
}

const fetchMorePhotos = () => {
    const { search_text } = this.state;
    if (search_text.length === 0) {
        fetchPhotos()
    } else {
        fetchPhotos(search_text)
    }
}