import React, {Component} from 'react';
import s from "./Searchbar.module.css"

class Searchbar extends Component {
    state={
        searchQuery: '',
    }

    handleInputChange=e=>{
        this.setState({searchQuery: e.currentTarget.value.toLowerCase()});
    }
    handleSubmit= e =>{
        e.preventDefault();

        if(this.state.searchQuery.trim() === ''){
            return alert('Input any thing')
        }

        this.props.onSubmit(this.state.searchQuery);
        this.setState({searchQuery : ''});
    }
    render() {
        return (
            <div>
                <header className={s.Searchbar}>
                    <form onSubmit={this.handleSubmit} className={s.SearchForm}>
                        <button type="submit" className={s.SearchFormButton}>
                            <span className={s.SearchFormButtonLabel}></span>
                        </button>

                        <input
                            onChange={this.handleInputChange}
                            value={this.state.searchQuery}
                            className={s.SearchFormInput}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>
            </div>
        );
    }
}

export default Searchbar;