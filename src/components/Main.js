import { Component } from 'react';
import HornedBeast from './HornedBeast';
import beastData from '../beastdata.json';
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

                {beastData.map(beastObject => {
                    return <HornedBeast
                    title={beastObject.title}
                    imageUrl={beastObject.image_url} description={beastObject.description}
                    />})
                }
            </Container>
            </>
        )
    }
}

export default Main;