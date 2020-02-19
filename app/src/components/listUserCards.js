import React from 'react';
import UserCard from "./userCard/userCard";

class ListUserCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-cards">
                {
                    this.props.users.map((user) => {
                        return <UserCard
                            key={user.username}
                            name={user.name}
                            username={user.username}
                            bio={user.bio}
                            url={user.url}
                            avatar={user.avatar}
                        />
                    })
                }
            </div>
        )
    }
}

export default ListUserCards;
