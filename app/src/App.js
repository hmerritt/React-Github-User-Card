import React from "react";
import { Container } from "@material-ui/core";
import Header from "./components/header/header";
import UserCard from "./components/userCard/userCard";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
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
                    <Container>
                        <UserCard name="Harry Merritt" username="hmerritt" bio="Web developer and graphic designer" url="https://github.com/hmerritt" />
                        <hr />
                    </Container>
                </div>
            </>
        );
    }
}

export default App;
