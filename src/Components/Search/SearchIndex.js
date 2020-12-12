import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
    }
  }

// Make a state for a search term
// Set search term equal to value of input
// Use array method to check if the value equals one of the strings in the array
// Render

  searchFunction(e) {
    this.setState({
      searchTerm: (e)
    })
  }

  render() {
    return (
      <div>
        <Input type='text' placeholder='Search Here' onChange={(e) => this.searchFunction(e.target.value)}/>
        <h3>Results:</h3>
        {this.state.things 
        .filter((thing) => {
          if (thing.includes(this.state.searchTerm)){
            return true
          } else {
            return null
          }
        })
        .map((thing, index) => {
          return(
            <div key={index}>
              <h3>{thing}</h3>
              </div>
          )
        })
        }
      </div>
    );
  }
}

export default SearchIndex;