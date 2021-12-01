import { Component } from "react";
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beastFavs: 0
        }
    }

    imgClick = () => {
        this.setState({beastFavs: this.state.beastFavs + 1});
    }

    render() {
        return(
            <Card style={{width: '18rem', textAlign: "center", margin: '1rem .5rem'}}>
                <h2>{this.props.title}</h2>
                <img 
                    src={this.props.imageUrl} 
                    alt={this.props.description} 
                    title={this.props.title}
                    onClick={this.imgClick}
                ></img>
                <p style={{fontSize: "24px"}}>🫀's: {this.state.beastFavs}</p>
                <p>{this.props.description}</p>
            </Card>
        )
    }
}

export default HornedBeast;