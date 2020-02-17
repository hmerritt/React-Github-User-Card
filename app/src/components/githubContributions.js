import React from 'react';
import GitHubCalendar from 'github-calendar';

class GithubContributions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GitHubCalendar(".github-contributions", this.props.username);
    }

    render() {
        return (
            <div className='github-contributions'>
                Loading contributions graph...
            </div>
        )
    }
}

export default GithubContributions;
