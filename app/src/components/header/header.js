import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6">Github <i> {this.props.username} </i></Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}

export default Header;
