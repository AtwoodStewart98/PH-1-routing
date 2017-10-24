import React, { Component } from 'react';
import Nav from './Nav/Nav';
import router from '../router.js';


class App extends Component {
  render() {
    return (
      <div>
          <Nav />
          {router}
      </div>
    );
  }
}

export default App;
