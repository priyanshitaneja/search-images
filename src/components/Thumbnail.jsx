import React from 'react';

const Thumbnail = {id, url, title, index, selected} => (
  <img
    key={id}
    src={url}
    alt={title}
    index={index}
    className={selected ? 'active' : undefined}
    onClick={() => propsonThumbnailClick(index)}
    // This violates accessibility rules, need to add keyboard handling
    // ToDo: The function also really shoudl come from props
  />
);

export default Thumbnail;
