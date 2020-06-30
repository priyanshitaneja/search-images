// import React from "react";

// function Photo({ photo }) {
//     return(
//         <img src={photo.photoURL} key={photo.id} alt={photo.description._content} />
//     )
// }

// export default Photo;

import React from 'react';
import "../../styles/photo.css";

class Photo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick = (event) => {
    //     document.getElementById('thumbnail').classList.remove('hidden');
    //     document.getElementById('thumbnailImage').attr("src", event.target.src);
    // }

    // closeThumbnail = () => {
    //     document.getElementById('thumbnail').classList.add('hidden');
    // }

    render() {
        return (
            <div className="" >
                <img
                    // data-target="#thumbnail"
                    // data-toggle="modal"
                    className="image"
                    src={this.props.source}
                    alt="Error, Please try again!"
                    onClick={(event) => this.handleClick(event)}
                />
                {/* <div
                    className="hidden imageCard"
                    id="thumbnail"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >

                    <button
                        type="button"
                        className="button"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={this.closeThumbnail}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <div className="">
                        <img className='gallery-thumbnail'
                            id="thumbnailImage"
                            // src={this.props.source}
                            alt="Not available" />
                    </div>
                </div> */}
            </div>
        );
    }
}
export default Photo;