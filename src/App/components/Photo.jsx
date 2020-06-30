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
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (event) => {
        document.getElementById('galleryImage').attr("src", event.target.src);
    }

    render() {
        return (
            <div className="" style={{ width: "30%" }}>
                <img
                    data-target="#thumbnail"
                    data-toggle="modal"
                    className="image"
                    src={this.props.source}
                    alt="Error, Please try again!"
                    onClick={(event) => this.handleClick(event)}
                />
                {/* <div
                    className=""
                    id="thumbnail"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="">
                        <img className='gallery-thumbnail' id="thumbnailImage" alt="Not available" />
                    </div>
                </div> */}
            </div>
        );
    }
}
export default Photo;