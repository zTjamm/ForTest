import React, {Component} from 'react';
import s from "./FeedBack.module.css"
import Button from "./Button/Button";
import Statistics from "./Statistics/Statistics";
import {NavLink} from "react-router-dom";
import Notification from "./Notification/Notification";

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
           <div>
               <NavLink className={s.hw2Btn} to="/hw2/feedback">FeedBack</NavLink>
               <NavLink className={s.hw2Btn} to="/hw2/phonebook">Phonebook</NavLink>
               <div className={s.wrapper}>
                   <NavLink className={s.backBtn} to='/hw2'>Back</NavLink>
                   <h1>Please leave feedback</h1>
                   <Button  state={this.state} increment={this.increment}/>
                   <h2>Statistics</h2>
                   {total ?(
                       <Statistics  state={this.state}/>
                   ):(
                       <Notification message="There is no feedback now" />
                   )}
               </div>
           </div>
        );
    }
}
export default FeedBack;