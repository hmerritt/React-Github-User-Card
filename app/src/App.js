import React from "react";
import { Container } from "@material-ui/core";
import Header from "./components/header/header";
import UserCard from "./components/userCard/userCard";
import axios from 'axios';
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: "hmerritt"
            },
            followers: []
        };
    }

    componentDidMount() {
        //  Get user data
        this.fetchUserData(this.state.user.username);

        //  Get user's followers
        this.fetchUserFollowers(this.state.user.username);
    }

    fetchUserData(username, type="main") {
        axios.get(`https://api.github.com/users/${username}`)
            .then((res) => {
                this.setState({
                    user: {
                        username: res.data.login,
                        name: res.data.name,
                        bio: res.data.bio,
                        url: res.data.url,
                        avatar: res.data.avatar_url
                    }
                })
            })
            .catch((err) => {
                console.error("[Fetch] Error getting user data from Github", err);
            });
    }

    fetchUserFollowers(username) {
        axios.get(`https://api.github.com/users/${username}/followers`)
            .then((res) => {
                this.setState({
                    followers: res.data.map((user) => {
                        return {
                            username: user.login,
                            url: user.url,
                            avatar: user.avatar_url
                        }
                    })
                })
            })
            .catch((err) => {
                console.error("[Fetch] Error getting user's follower data from Github", err);
            });
    }

    render() {
        return (
            <>
                <Header username={this.state.user.username} />

                <div className="content">
                    <Container>
                        <UserCard
                            name={this.state.user.name}
                            username={this.state.user.username}
                            bio={this.state.user.bio}
                            url={this.state.user.url}
                            avatar={this.state.user.avatar}
                        />
                        <hr />
                        {/*<ListUserCards users={this.state.followers} />*/}
                    </Container>
                </div>
            </>
        );
    }
}

export default App;
