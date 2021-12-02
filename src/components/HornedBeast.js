import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beastFavs: 0
        }
    }

    imgClick = () => {
        this.setState({beastFavs: this.state.beastFavs + 1});
        this.props.showModal();
        this.props.updateClickedBeast(this.props.beastObj);
    }

    render() {
        return(
            <Card style={{width: '18rem', margin: '1rem .5rem'}}>
                <Card.Img
                    varient="top" 
                    src={this.props.beastObj.image_url} 
                    alt={this.props.beastObj.description} 
                    title={this.props.beastObj.title}
                    onClick={this.imgClick}
                />
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{this.props.beastObj.title}</Card.Title>
                        </Col>
                        <Col md='auto'>    
                            <Card.Title>❤️'s: {this.state.beastFavs}</Card.Title>
                        </Col>    
                    </Row>
                    <Card.Text>{this.props.beastObj.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;