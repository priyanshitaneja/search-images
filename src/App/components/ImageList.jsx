import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as actions from "../../data/redux/actions";
import Photo from "./Photo";
import Loader from "./Loader";
import "../../styles/imageList.css";

class ImageList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        // this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchPhotos();
        // this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // setSpans = () => {
    //     console.log(this.imageRef.current.clientHeight);
    // }

    render() {
        console.log("Photos", this.props.photos)
        return (
            <div id="image-container" ref={this.listRef}>
                <InfiniteScroll
                    dataLength={this.props.photos ? this.props.photos.length : 0}
                    next={this.props.handleFetchMorePhotos}
                    hasMore={true}
                    loader={<Loader />}
                    scrollableTarget="#image-container"
                    className=""
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>That's all we have for this search!</b>
                        </p>
                    }
                >

                    <div id="imageList">
                        {
                            this.props.photos ?
                                (this.props.photos.map(({ id, farm, secret, server }, i) => (
                                    <Photo
                                        ref={this.imageRef}
                                        key={i}
                                        source={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
                                    />
                                ))
                                ) : null
                        }
                    </div>

                </InfiniteScroll>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        photos: state.photos,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: () => dispatch(actions.fetchPhotos()), // The name you mention here is available to you as a prop, accessible with this.props
        handleFetchMorePhotos: () => dispatch(actions.fetchMorePhotos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);

