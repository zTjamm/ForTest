import React, {Component} from 'react';
import PokemoDataView from "./PokemoDataView";
import PokemonErrorView from "./PokemonErrorView";
import PokemonPendingViews from "./PokemonPendingViews";

class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            console.log("New pokemon")
            this.setState({status: 'pending'})
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(new Error(`Нет покемона с именем  ${this.props.pokemonName}`))
                })
                .then(pokemon => this.setState({pokemon, status: 'resolved'}))
                .catch(error => this.setState({error, status: 'rejected'}))
        }
    }

    render() {
        const {pokemon, error,status} = this.state;

        if(status === 'idle'){
            return (<div>Введите имя покемона</div>)
        }
        if(status === 'pending'){
            return (<PokemonPendingViews />)
        }
        if(status === 'rejected'){
            return (<div><PokemonErrorView message={error.message} /></div>)
        }
        if(status === 'resolved'){
            return (
                <PokemoDataView pokemon={pokemon} />
            )
        }
    }
}

export default PokemonInfo;