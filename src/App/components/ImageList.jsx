import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPhoto } from '../../data/redux/actions/selectPhoto';
// import Thumbnail from './Thumbnail';

class ImageList extends Component {

    renderList() {
        return (
            <div>gvhbg</div>
        )
    }

    render() {
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return {  };
}

export default connect(mapStateToProps, { selectPhoto })(ImageList);
