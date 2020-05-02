import React from 'react';
import { getPhoto } from '../services/unsplashApi';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images : []
    };
  }

  onSearchSubmit = term => {  
    getPhoto(term)
      .then(res =>{
        this.setState({ images: res.data.results});
        console.log(res.data.results);
        
      })
      .catch(err => console.log(err))
  }

  render() {
    const { images } = this.state;
  
    return (
      <div className="ui container" style={{ marginTop: '1rem'}}>
      <SearchBar
        onSubmit={this.onSearchSubmit}
      />
      <ImageList images={images} />
      Found: {images.length} images
      </div>
    );
  }
}

export default App;