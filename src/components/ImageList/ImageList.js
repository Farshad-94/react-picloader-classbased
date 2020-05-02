import React from 'react';
import './styles/ImageList.scss';

const ImageList = props => {
    
    const images = props.images.map((image) => {
      return <img key={image.id} src={image.urls.regular} alt={image.description} />
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
