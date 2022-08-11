import React, {Component} from 'react';


class PokemonForm extends Component {
    state = {
        pokemonName: '',
    };

    handleNameChange = e => {
        this.setState({pokemonName: e.currentTarget.value.toLowerCase()});
    }
    handleSubmit = e => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
           return  alert ('Введите имя')
            }

        this.props.onSubmit(this.state.pokemonName);
        this.setState({pokemonName: ''})
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='pokemonName'
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                />
                <button type='submit'>
                    Найти
                </button>
            </form>
        );
    }
}

export default PokemonForm;