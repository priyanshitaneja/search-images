import React from 'react';
import PropTypes from 'prop-types';
import "./Image.css";

function Image () {

  onClickCard = () => {
    const { img_data, onClick } = this.props;
    onClick(img_data);
  }

  render() {
    const { img_data } = this.props;
    return (
      <div 
        className="imageCard" 
        onClick={onClickCard}>
        <div className="loading">
          <img 
            src={img_data.url} 
            alt="" 
            style={{minHeight:'150px'}} />
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  img_data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

Image.defaultProps = {
  img_data: {}
}

export default Image;
