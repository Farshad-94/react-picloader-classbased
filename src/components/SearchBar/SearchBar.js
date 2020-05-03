import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term : ''
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    const { term } = this.state;

    return (
      <div className='ui segment'>
        <form onSubmit={e => this.handleSubmit(e)} className='ui form'>
          <div className='field'>
              <label>Image Search</label>
              <input 
                type="text"
                value={term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
          </div>
        </form>   
      </div>
    );
  }
}
