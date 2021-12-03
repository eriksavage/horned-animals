import React, { Component } from 'react'
import beastData from '../beastdata.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import SearchBar from './SearchBar.js';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // beastData: [],
      modalDisplayed: false,
      clickedBeast: {},
      search: ""
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

  textChange = (e) => {
    this.setState({search: e.target.value})
    this.beastFilter();
  };
  
  beastFilter = () => {
    let beastArray = [];
    if(this.state.search === ""){
      beastArray =  beastData;
      return beastArray;
    } else {
      beastArray =  beastData.filter(arrObj => arrObj.title.includes(this.state.search));
      return beastArray;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar textChange={this.textChange}/>
        <SelectedBeast hideModal={this.hideModal} show={this.state.modalDisplayed} clickedBeast={this.state.clickedBeast}/>
        <Main beastData={this.beastFilter()} showModal={this.showModal} updateClickedBeast={this.updateClickedBeast}/>
        <Footer />
      </div>
    )
  }
}
