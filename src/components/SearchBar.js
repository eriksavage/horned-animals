import { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class SearchBar extends Component {
    
    render(){
        return(
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
                <FormControl
                    placeholder="Filter by HornedBeast's name..."
                    aria-label="Filter by HornedBeast's name..."
                    aria-describedby="basic-addon1"
                    onChange={this.props.textChange}
                />
          </InputGroup>
        )
    }
}

export default SearchBar;