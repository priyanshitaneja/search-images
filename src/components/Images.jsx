import React from 'react';
import Thumbnail from './Thumbnail';

const Images = ({ images, onThumbnailClick, selected }) => {
  const thumbnail = images.map((item, index) => (
    <Thumbnail
      key={`t_${item.id}`}
      url={item.url}
      title={item.title}
      index={index}
      onThumbnailClick={onThumbnailClick}
      selected={index === selected}
    />
  ));
  return thumbnail;
};

export default Images;
