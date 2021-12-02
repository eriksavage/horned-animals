import React, { Component } from 'react'
import beastData from '../beastdata.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      beastData: {beastData},
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
    this.filterSearch();
    console.log(this.state.search);
  };

  filterSearch = () => {
    let beastArray = [];
    if (this.state.search === ""){
      return this.state.beastData;
    } else {
      this.setState({beastData: this.state.beastData.filter(arrObj => arrObj.title.includes(this.state.search))});
      console.log(beastArray)
      return this.state.beastData;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
          <FormControl
            placeholder="Filter by HornedBeast's name..."
            aria-label="Filter by HornedBeast's name..."
            aria-describedby="basic-addon1"
            onChange={this.textChange}
          />
        </InputGroup>
        <SelectedBeast hideModal={this.hideModal} show={this.state.modalDisplayed} clickedBeast={this.state.clickedBeast}/>
        <Main beastData={this.filterSearch()} showModal={this.showModal} updateClickedBeast={this.updateClickedBeast}/>
        <Footer />
      </div>
    )
  }
}
