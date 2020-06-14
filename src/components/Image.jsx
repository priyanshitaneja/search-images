import React from 'react';
import PropTypes from 'prop-types';
import "./Image.css";

function Image () {

  onClickCard = () => {
    const { img, onClick } = this.props;
    onClick(img);
  }

  render() {
    const { img } = this.props;
    return (
      <div 
        className="imageCard" 
        onClick={onClickCard}>
        <div className="loading">
          <img 
            src={img.url} 
            alt="" 
            style={{minHeight:'150px'}} />
        </div>
      </div>
    );
  }
}

Image.defaultProps = {
  img: {}
}

export default Image;
