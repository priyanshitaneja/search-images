import React, { createRef } from "react";
import axios from "axios";

// import Photo from "./Photo";
import "./App.css";

import { Form, Input, Typography, Layout } from "antd";

function App() {

    const inputRef = createRef();

    const { Title } = Typography;
    const { Header, Footer, Content } = Layout;

    
    const api_key= '469809d930183a99561ed770e378c9d4';
    const per_page= 30;
    const format= 'json';
    const safe_search=1;


    const getPhotoURL = (photo) => {
        const {id, farm, secret, server} = photo;
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    const convertInImagesList = photos => {
        const images = [];
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

    const fetchPhotos = (tags) => {
        tags = inputRef.current.value
        console.log(tags)
        
        const method = !tags ? 'flickr.photos.search' : 'flickr.photos.getRecent';
        
        axios.get(
            `https://www.flickr.com/services/rest/&method=${method}&api_key=${api_key}&safe_search=${safe_search}&per_page=${per_page}&format=${format}&tags=${tag}`
        ).then( response => {
            if (response.data.photos && response.data.photos.photo) {
                const images = convertInImagesList(response.data.photos.photo)
            return images
                .map((item) => {
                    item.photoURL = getPhotoURL(item);
                    return item;
                })
            }}
        )}

    const debounceFn = (func, time) => {
        let timeout;
        return function () {
            const functionCall = () => func.apply(this, arguments);
            clearTimeout(timeout);
            timeout = setTimeout(functionCall, time);
        }
    }

    const handleChange = debounceFn(fetchPhotos, 300)

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const searchTerm = inputRef.current.value
    // }

    return (
        <Layout>
            <Header>
                <Title level={1}>Search Images</Title>
                <Form
                // onSubmit={handleSubmit} 
                >
                    <Input
                        type="text"
                        placeholder="Search here"
                        // value={input}
                        ref={inputRef}
                        onChange={handleChange}
                    />
                </Form>
            </Header>
            <Content>
                {/* <Photo /> */}
            </Content>
            {/* <Footer id="">
                Developed by PT &copy; 2020
            </Footer> */}
        </Layout>
    )
}

export default App;