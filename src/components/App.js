import React, { Component } from 'react'
import beastData from '../beastdata.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main beastData={beastData}/>
        <Footer />
      </div>
    )
  }
}
