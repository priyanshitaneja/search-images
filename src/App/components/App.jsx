import React from "react";

import ImageList from "./ImageList";
import FooterX from "./FooterX";
import HeaderX from "./HeaderX";

import { Layout } from "antd";

function App() {
    return (
        <Layout> 
            <HeaderX />
            <ImageList />
            <FooterX />
        </Layout>
    );
};

export default App;

// function App() {

//     const api_key = '469809d930183a99561ed770e378c9d4';
//     const per_page = 30;
//     const format = 'json';
//     const safe_search = 1;

//     // const {images, setImages} = useState([]);
//     let searchText= "";
//     //let nextPage= 1;
//     //let hasMore= true;
//     let loading= false;

//     // const inputRef = createRef();

//     const { Content } = Layout;

//     const stopLoading = () => {
//         this.setState({ loading: false });
//     }

//     const fetchPhotos = (tag, action) => {
//         // tag = inputRef.current.value
//         console.log(tag)
    
//         const method = !tag ? 'flickr.photos.search' : 'flickr.photos.getRecent';
    
//         axios({
//             method: 'GET',
//             url: `https://www.flickr.com/services/rest/?method=${method}&api_key=${api_key}&safe_search=${safe_search}&per_page=${per_page}&format=${format}&tags=${tag}`
//         }).then(response => {
//             if (action) action();
//             if (response.data.photos && response.data.photos.photo) {
//                 const images = ImagesList(response.data.photos.photo)
//                 this.setImages(prevImages => {
//                     return {
//                         images: [...prevImages, images]
//                     }
//                 })
//             }
//         }).catch(error => {
//             this.showMessage(error, 'Something went wrong, Please try again!');
//         });
//     }

//     const ImagesList = photos => {
//         const images= []
//         for (let i = 0; i < photos.length; i++) {
//             if (photos[i].id) {
//                 const photoObj = {
//                     id: photos[i].id,
//                     url: getPhotoURL(photos[i]),
//                 };
//                 images.push(photoObj);
//             }
//         }
//         return images;
//     }

//     const getPhotoURL = (photo) => {
//         const { id, farm, secret, server } = photo;
//         return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
//     }

//     const debounceFn = (func, time) => {
//         let timeout;
//         return function () {
//             const functionCall = () => func.apply(this, arguments);
//             clearTimeout(timeout);
//             timeout = setTimeout(functionCall, time);
//         }
//     }

//     const handleChange = debounceFn(fetchPhotos, 300)

//     const handleSearch = tag => {
//         this.setState({
//             loading: true,
//             images: []
//             // nextPage: 1,
//             // hasMore: true
//         }, () => {
//             if (tag && tag.trim().length > 0) {
//                 fetchPhotos(tag, stopLoading);
//             }
//         })
//     }

//     return (
//         <Layout>
//             <SearchForm 
//                 onClickSearchKey={handleSearch}
//                 // search_keys={search_keys}
//                 onSearch={handleSearch}
//                 onChange={handleChange}
//             />
//             <Content>
//                 {/* {
//                     images.map(() => {
//                         return (
//                             <img src={photoObj.photoURL} key={photoObj.id} alt={photo.description._content} />
//                         )
//                     })
//                 } */}
//                 {/* {
//                     loading ?
//                         <Loader count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
//                         <InfiniteScroll
//                             scrollableTarget="albumContainer"
//                             dataLength={images.length} //This is important field to render the next data
//                             hasMore={hasMore}
//                             loader={<Loader />}
//                             endMessage={
//                                 <div>
//                                     <b>
//                                         That's all we have for now!
//                                     </b>
//                                 </div>
//                             }
//                             next={fetchMoreImages}
//                         >
//                             <Album columns={columns} images={images} />
//                         </InfiniteScroll>
//                 } */}
//             </Content>
//             <FooterX />
//         </Layout>
//     )
// }

// export default App;









// export class App extends Component {
//   /*
//   componentDidMount({ dispatch }) {
//     dispatch(searchPhotos(window.store));
//   }
//   */

//  const fetchPhotos = (tag, action) => {
//     // tag = inputRef.current.value
//     // console.log(tag)

//     const method = !tag ? 'flickr.photos.search' : 'flickr.photos.getRecent';

//     axios({
//         method: 'GET',
//         url: `https://www.flickr.com/services/rest/?method=${method}&api_key=${api_key}&safe_search=${safe_search}&per_page=${per_page}&format=${format}&tags=${tag}`
//     }).then(response => {
//         if (action) action();
//         if (response.data.photos && response.data.photos.photo) {
//             const images = ImagesList(response.data.photos.photo)
//             this.setImages(prevImages => {
//                 return {
//                     images: [...prevImages, images]
//                 }
//             })
//         }
//     }).catch(error => {
//         this.showMessage(error, 'Something went wrong, Please try again!');
//     });
// }


//   render({ fetchError }) {
//     return (
//       <div className="App">
//         <SearchForm onSubmit={this.handleSearch} />
//         {!fetchError ? <Loader /> : <Error />}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => (
//   {
//     fetchError: state.fetchError,
//     form: state.form,
//     Loader: state.Loader,
//   }
// );
