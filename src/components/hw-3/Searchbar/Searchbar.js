import React, {Component} from 'react';
import css from "./Searchbar.module.css";

class Searchbar extends Component {
    state={
        query: "",
    }
    handleChange=e=>{
        const searchQuery = e.target.value;
        this.setState({query: searchQuery})
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.reset()
    }
    reset=()=>{
        this.setState({query: ''})
    }
    render() {
        return (
            <div>
                <header className={css.Searchbar}>
                    <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                        <button type="submit" className={css.SearchFormButton}>
                            <span className={css.SearchFormButtonLabel}></span>
                        </button>

                        <input
                            className={css.SearchFormInput}
                            value={this.state.query}
                            onChange={this.handleChange}
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