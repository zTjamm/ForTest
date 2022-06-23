import React, {Component} from 'react';
import s from "./FeedBack.module.css"
import Button from "./Button/Button";
import Statistics from "./Statistics/Statistics";

class FeedBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    increment =(e)=>{
        const {name}=e.currentTarget
        this.setState((prevState)=>({
            [name]: prevState[name] +1
            })
        )
    }
    render() {
        const {good, neutral, bad}= this.state;
        const total = good + neutral +bad;
        return (
            <div className={s.wrapper}>
                <h1>Please leave feedback</h1>
                <Button  state={this.state} increment={this.increment}/>
                <h2>Statistics</h2>
                {total >0 ?(
                    <Statistics  state={this.state}/>
                ):(
                    <p>There is no feedback</p>
                    )}
            </div>
        );
    }
}
export default FeedBack;