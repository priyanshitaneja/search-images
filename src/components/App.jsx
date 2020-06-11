import React, { createRef } from "react";
import axios from "axios";

// import Photo from "./Photo";
import "./App.css";

import { Form, Input, Typography, Layout } from "antd";

function App() {

    const inputRef = createRef();

    const { Title } = Typography;
    const { Header, Footer, Content } = Layout;

    const DEFAULT_PARAMS = {
        api_key: '469809d930183a99561ed770e378c9d4',
        safe_search: 1,
        per_page: 30,
        format: 'json'
    };

    const getPhotoURL = (photo) => {
        const {id, farm, secret, server} = photo;
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    const fetchPhotos = (tags) => {
        tags = inputRef.current.value
        console.log(tags)
        const method = !tags ? 'flickr.photos.search' : 'flickr.photos.getRecent';
        const params = {
            ...DEFAULT_PARAMS,
            method,
            tags
        };

        axios.get('https://www.flickr.com/services/rest/', params)
        .then((response) => {
            const photos = response.photos.photo
            return photos
                .map((item) => {
                    item.photoURL = getPhotoURL(item);
                    return item;
                });
        })
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