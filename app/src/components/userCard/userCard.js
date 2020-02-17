import React from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@material-ui/core";
import './userCard.css';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="userCard">
                <Card>
                    <CardMedia component="img" image="https://avatars1.githubusercontent.com/u/17837575?s=460&v=4" height="200" />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            {this.props.name} <small>({this.props.username})</small>
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {this.props.bio}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={this.props.url}>
                            Github
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default UserCard;
