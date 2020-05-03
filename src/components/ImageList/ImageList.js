import React from 'react';
import './styles/ImageList.scss';
import ImageCard from '../ImageCard';

const ImageList = props => {
    
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />
  });

  return (
    <div className="ui container">
      <div className="image">
        {images}
      </div>
    </div>
  );
};

export default ImageList;
