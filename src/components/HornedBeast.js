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
        this.props.showModal();
        this.props.updateClickedBeast(this.props.beastObj);
    }

    render() {
        return(
            <Card style={{width: '18rem', textAlign: "center", margin: '1rem .5rem'}}>
                <h2>{this.props.beastObj.title}</h2>
                <img 
                    src={this.props.beastObj.image_url} 
                    alt={this.props.beastObj.description} 
                    title={this.props.beastObj.title}
                    onClick={this.imgClick}
                ></img>
                <p style={{fontSize: "24px"}}>🫀's: {this.state.beastFavs}</p>
                <p>{this.props.beastObj.description}</p>
            </Card>
        )
    }
}

export default HornedBeast;