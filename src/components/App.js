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
      hornFilter: "any",
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

  updateHorns = (selection) => {
    this.setState({hornFilter: selection});
    console.log('horn state', this.state.hornFilter);
  }
  
  beastFilter = () => {
    let beastArray = [];
    let hornArray = [];
    
    switch (this.state.hornFilter) {
      case "any":
        hornArray = beastData;
        break;
      case "1":
        hornArray = beastData.filter(arrObj => (arrObj.horns === 1));
        break;
      case "2":
        hornArray = beastData.filter(arrObj => (arrObj.horns === 2));
        break;
      case "3":
        hornArray = beastData.filter(arrObj => (arrObj.horns === 3));
        break;  
      default:
        hornArray = beastData.filter(arrObj => (arrObj.horns > 3));
        break;
    }
    
    if(this.state.search === ""){
      return hornArray;
    } else {
      beastArray =  hornArray.filter(arrObj => arrObj.title.toLowerCase().includes(this.state.search.toLowerCase()));
      return beastArray; 
    };
  }


  render() {
    return (
      <div>
        <Header textChange={this.textChange} updateHorns={this.updateHorns}/>
        <SelectedBeast hideModal={this.hideModal} show={this.state.modalDisplayed} clickedBeast={this.state.clickedBeast}/>
        <Main beastData={this.beastFilter()} showModal={this.showModal} updateClickedBeast={this.updateClickedBeast}/>
        <Footer />
      </div>
    )
  }
}
