import React, { Component } from 'react';

export class ImageCard extends Component {
    
  render() {

    const { urls, description } = this.props.image;
  
    return (
      <div>
        <img 
          src={urls.regular}
          alt={description}
        />
      </div>
    )
  };
};

export default ImageCard;
