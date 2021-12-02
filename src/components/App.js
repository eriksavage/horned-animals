import React, { Component } from 'react'
import beastData from '../beastdata.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalDisplayed: false,
      clickedBeast: {}
    }
  }
  updateClickedBeast = (beastObj) => {
    this.setState({clickedBeast: beastObj});
  };
  showModal = () =>{
    this.setState({modalDisplayed: true});
  };
  hideModal = () =>{
    this.setState({modalDisplayed: false});
  };

  render() {
    return (
      <div>
        <Header />
        <SelectedBeast hideModal={this.hideModal} show={this.state.modalDisplayed} clickedBeast={this.state.clickedBeast}/>
        <Main beastData={beastData} showModal={this.showModal} updateClickedBeast={this.updateClickedBeast}/>
        <Footer />
      </div>
    )
  }
}
