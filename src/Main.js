import { Component } from "react";
import HornedBeast from './HornedBeast';

class Main extends Component {
    render(){
        return (
            <>
                <p>Main Component</p>
                <HornedBeast />
                <HornedBeast/>
            </>
        )
    }
}

export default Main;