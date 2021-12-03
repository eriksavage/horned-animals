import { Component } from "react";
import SearchBar from './SearchBar.js';
import HornFilter from './HornFilter.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends Component {
    render(){
        return (
            <>
                <h1 style={{textAlign: 'center'}}>Horned Beast Image Gallery</h1>
                <Row>
                    <Col>
                        <SearchBar textChange={this.props.textChange}/>
                    </Col>
                    <Col>
                        <HornFilter updateHorns={this.props.updateHorns}/>
                    </Col>
                </Row>
            </>    
        )
    }
}

export default Header;