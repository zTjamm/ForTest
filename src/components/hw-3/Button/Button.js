import React, {Component} from 'react';

class Button extends Component {
    state={
        page: 1
    }
    onPageChange=()=>{
        this.setState(prevState=>{
            return{
                page: prevState.page + 1,
            }
        })
        this.props.onClick(this.state.page)
    }
    render() {
        return (
            <div>
                <button onClick={this.onPageChange}>Load More</button>
            </div>
        );
    }
}

export default Button;