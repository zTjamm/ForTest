import React, {Component} from 'react';

import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";

class Pokemon extends Component {
    state={
        pokemonName: '',
    }
    handleFormSubmit=pokemonName=>{
        this.setState({ pokemonName})
    }

    render() {
        return (
            <div>
                <PokemonForm onSubmit={this.handleFormSubmit} />
                <PokemonInfo pokemonName={this.state.pokemonName} />

            </div>
        );
    }
}

export default Pokemon;
