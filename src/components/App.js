import React from 'react';
import { getPhoto, parseErr } from '../services/picloaderApi';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images : [],
      error: null
    };
  }

  onSearchSubmit = term => {  
    getPhoto(term)
      .then(res =>{
        this.setState({ images: res.data.results }); 
      })
      .catch(err => {
        this.setState({ error: true })
      })
  }

  render() {
    const { images, error } = this.state;
  
    return (
      <div className="ui container" style={{ marginTop: '1rem'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={images} />
        Found: {images.length} images
        <div className="ui container">
          { error &&
            <p className="error">
              {parseErr(error)}
            </p>
          }
        </div>
      </div>
    );
  }
}

export default App;