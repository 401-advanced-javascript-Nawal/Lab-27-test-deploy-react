import React from 'react';
import Header from './modules/Header.js';
import Footer from './modules/Footer.js';
import Counter from './modules/Counter.js';

// Netlify Deployment : https://objective-franklin-577a0a.netlify.com/

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        {/* <Counter /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;