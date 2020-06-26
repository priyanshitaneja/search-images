import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../data/redux/actions';
// import Thumbnail from './Thumbnail';

class ImageList extends Component {

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        return <div>gvhbg</div>
    }
}

export default connect(null, { fetchPhotos })(ImageList);
