import React, {Component} from 'react';
import Button from "./Button";

class FeedBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <Button  state={this.state}/>
            </div>
        );
    }
}

export default FeedBack;