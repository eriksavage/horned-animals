import { Component } from "react";

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
            <>
                <h2>{this.props.title}</h2>
                <img 
                    src={this.props.imageUrl} 
                    alt={this.props.description} 
                    title={this.props.title}
                    onClick={this.imgClick}
                ></img>
                <p>🫀's: {this.state.beastFavs}</p>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;