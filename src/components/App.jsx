import React, { createRef, useState } from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';

// import Photo from "./Photo";
import "./App.css";
import HeaderX from "./HeaderX";
import FooterX from "./FooterX";

import { Layout } from "antd";

function App() {

    const api_key = '469809d930183a99561ed770e378c9d4';
    const per_page = 30;
    const format = 'json';
    const safe_search = 1;

    this.setState = {
        images: [],
        // device_data: checkDevice.deviceStatus(),
        // columns: getColumns(checkDevice.deviceStatus().screen_type),
        search_text: '',
        // nextPage: 1,
        // hasMore: true,
        loading: false,
        // show_search_overlay: false,
        search_keys: getDataFromLocalStorage(LOCAL_STORAGE.SEARCH_KEY, [])
    }

    // const inputRef = createRef();

    const { Content } = Layout;

    const getPhotoURL = (photo) => {
        const { id, farm, secret, server } = photo;
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    const showMessage = (type, msg) => {
        const Message = message[type];
        Message(msg);
    };

    const stopLoading = () => {
        setState({ loading: false });
    }

    const ImagesList = photos => {
        for (let i = 0; i < photos.length; i++) {
            if (photos[i].id) {
                const photoObj = {
                    id: photos[i].id,
                    url: getPhotoURL(photos[i]),
                };
                images.push(photoObj);
            }
        }
        return images;
    }

    fetchMorePhotos = () => {
        const { search_text } = this.state;
        if (search_text.length === 0) {
            fetchPhotos()
        } else {
            fetchPhotos(search_text)
        }
    }

    const fetchPhotos = (tag, action) => {
        tag = inputRef.current.value
        console.log(tag)

        const method = !tag ? 'flickr.photos.search' : 'flickr.photos.getRecent';

        axios({
            method: 'GET',
            url: `https://www.flickr.com/services/rest/?method=${method}&api_key=${api_key}&safe_search=${safe_search}&per_page=${per_page}&format=${format}&tags=${tag}`
        }).then(response => {
            if (action) action();
            if (response.data.photos && response.data.photos.photo) {
                const images = ImagesList(response.data.photos.photo)
                setImages(prevImages => {
                    return {
                        images: [...prevImages, images]
                    }
                })
            }
        }).catch(error => {
            showMessage(error, 'Something went wrong, Please try again!');
        });
    }

    const debounceFn = (func, time) => {
        let timeout;
        return function () {
            const functionCall = () => func.apply(this, arguments);
            clearTimeout(timeout);
            timeout = setTimeout(functionCall, time);
        }
    }

    const handleChange = debounceFn(fetchPhotos, 300)

    const handleSearch = tag => {
        this.setState({
            loading: true,
            images: [],
            next_page: 1,
            has_more_images: true,
            show_search_overlay: false
        }, () => {
            if (tag && tag.trim().length > 0) {
                fetchPhotos(tag, stopLoading);
            }

            return (
                <Layout>
                    <HeaderX
                        search_text={search_text}
                        show_search_overlay={show_search_overlay}
                        onClickSearchKey={onClickSearchKey}
                        search_keys={search_keys}
                        onSearch={handleSearch}
                        onChange={handleChange}
                    />
                    <Content>
                        {/* {
                            images.map(() => {
                                return (
                                    <img src={photoObj.photoURL} key={photoObj.id} alt={photo.description._content} />
                                )
                            })
                        } */}
                        {
                            loading ?
                                <Loader count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                                <InfiniteScroll
                                    scrollableTarget="albumContainer"
                                    dataLength={images.length} //This is important field to render the next data
                                    hasMore={hasMore}
                                    loader={<Loader />}
                                    endMessage={
                                        <div>
                                            <b>
                                                That's all we have for now!
                                            </b>
                                        </div>
                                    }
                                    next={fetchMoreImages}
                                >
                                    <Album columns={columns} images={images} />
                                </InfiniteScroll>
                        }
                    </Content>
                    <FooterX />
                </Layout>
            )
        }

export default App;