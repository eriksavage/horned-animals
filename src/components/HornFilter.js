import { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class HornFilter extends Component{
    selectHandler = (event) => {
        const selected = event.target.value;
        this.props.updateHorns(selected);
        console.log("selected value", selected);
    };

    render(){
        return(
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Horn Filter</InputGroup.Text>
                <Form.Select onChange={this.selectHandler}>
                    <option value="any">Any Number</option>
                    <option value="1">1 Horn</option>
                    <option value="2">2 Horns</option>
                    <option value="3">3 Horns</option>
                    <option value="4+">4+ Horns</option>
                </Form.Select>
            </InputGroup>  
        )
    }
}

export default HornFilter;