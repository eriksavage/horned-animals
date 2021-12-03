import { Component } from "react";
import Form from 'react-bootstrap/Form';

class HornFilter extends Component{
    selectHandler = (event) => {
        const selected = event.target.value;
        this.props.updateHorns(selected);
        console.log("selected value", selected);
    };

    render(){
        return(
            <>
                <label>Horn Filter </label>
                <Form.Select onChange={this.selectHandler}>
                    <option value="any">Any Number</option>
                    <option value="1">1 Horn</option>
                    <option value="2">2 Horns</option>
                    <option value="3">3 Horns</option>
                    <option value="4+">4+ Horns</option>
                </Form.Select>
            </>    
        )
    }
}

export default HornFilter;