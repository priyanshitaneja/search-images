// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import { Row, Col } from 'antd';

// // function Loader() {
// //   render() {
// //     const { count } = this.props;
// //     return (
// //       <Row>
// //         {
// //           count.map(item => (
// //             <Col>
// //               <div>
// //                 <div style={{ height: '150px' }} />
// //               </div>
// //             </Col>
// //           ))
// //         }
// //       </Row>
// //     );
// //   }
// // }

// // Loader.propTypes = {
// //   count: PropTypes.array.isRequired,
// // }

// // Loader.defaultProps = {
// //   count: [1, 2, 3]
// // }

// // export default Loader;


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Images from './Images';
// import { setMainImageIndex } from '../state/actions/Loader';
// import { searchPhotos } from '../state/actions/searchPhotos';

// export class Loader extends Component {
//   constructor(props) {
//     super(props);
//     this.ImagesList = this.ImagesList.bind(this);
//   }

//   onImageClick = index => this.props.dispatch(setMainImageIndex(index));

//   render() {
//     const arrPhotos = this.ImagesList();
//     const photosInState = Array.isArray(arrPhotos);
//     const thumbPhotos = photosInState
//       ? (
//         <div id="imageCard">
//           <Images
//             Images={this.ImagesList()}
//             onImageClick={this.onImageClick}
//             selected={this.props.Loader.mainImageIndex}
//           />
//         </div>
//       )
//       : null;
//     const mainPhoto = photosInState ? this.getMainPhoto() : null;
    
//     return (
//       <div id="Loader">
//         <div id="mainPhotoContainer">
//           {mainPhoto}
//         </div>
//         {thumbPhotos}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => (
//   {
//     photos: state.searchPhotos.photos,
//     Loader: state.Loader,
//   }
// );

// export default connect(mapStateToProps)(Loader);
