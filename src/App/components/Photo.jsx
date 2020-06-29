// import React from "react";

// function Photo({ photo }) {
//     return(
//         <img src={photo.photoURL} key={photo.id} alt={photo.description._content} />
//     )
// }

// export default Photo;

import React from 'react';

class Photo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler = (event) => {
        document.getElementById('galleryImage').attr("src", event.target.src);
    }

    render() {
        return (
            <div className="">
                <img
                    data-target="#myModal"
                    data-toggle="modal"
                    className=""
                    src={this.props.source}
                    alt="Error, Please try again!"
                    onClick={(event) => this.onClickHandler(event)} />
            </div>
        );
    }
}
export default Photo;