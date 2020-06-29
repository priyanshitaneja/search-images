import React from 'react';
import { connect } from 'react-redux';
import * as actions from "../../data/redux/actions";
import InfiniteScroll from 'react-infinite-scroll-component';

class ImageList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    render() {
        // $('.infinite-scroll-component__outerdiv').css("width", "100%");
        return (
            <div id="image-container" ref={this.listRef} className="row">
                <InfiniteScroll
                    dataLength={this.props.photos ? this.props.photos.length : 0}
                    next={this.props.handleFetchMorePhotos}
                    hasMore={true}
                    loader={<Loader />}
                    className=""
                    style={{ marginTop: "8rem" }}
                >

                    {
                        this.props.photos ?
                            (this.props.photos.map((photo, i) => (
                                <Photo
                                    key={i}
                                    source={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                                />
                            ))
                            ) : null
                    }

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
        handleFetchPhotos: () => dispatch(actions.fetchPhotos()),
        handleFetchMorePhotos: () => dispatch(actions.fetchMorePhotos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);

