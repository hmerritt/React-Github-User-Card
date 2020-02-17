import React from "react";
import { Container } from "@material-ui/core";
import Header from "./components/header/header";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("sup");
    }

    render() {
        return (
            <>
                <Header />

                <div className="content">
                    <Container>lol</Container>
                </div>
            </>
        );
    }
}

export default App;
