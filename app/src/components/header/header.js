import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6">Github users</Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}

export default Header;
