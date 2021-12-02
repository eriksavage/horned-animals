import { Component } from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';

class Main extends Component {
    render(){
        return (
            <>
            <Container fluid style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
                }}>

                {this.props.beastData.map(beastObject => {
                    return <HornedBeast 
                    beastObj = {beastObject}
                    showModal={this.props.showModal} 
                    show={this.props.modalDisplayed}
                    />})
                }
            </Container>
            </>
        )
    }
}

export default Main;