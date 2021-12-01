import { Component } from "react";
import HornedBeast from './HornedBeast';
import beastData from '../data.json';

class Main extends Component {
    render(){
        return (
            <>
                {beastData.map(beastObject => {
                    return <HornedBeast
                    title={beastObject.title}
                    imageUrl={beastObject.image_url} description={beastObject.description}
                    />})
                }
            </>
        )
    }
}

export default Main;