import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class CreatePokemon extends React.Component{
    constructor(){
        super(),
        this.state={
            pokemonName: ''
        }
    }
    render(){
        const {pokemonName} = this.state
        return (
            <form onSubmit={(ev)=>{
                ev.preventDefault();
                this.props.add(this.state.pokemonName)
            }}>
                <input name = 'name' 
                       value = {pokemonName} 
                       placeholder = 'pokemon name' 
                       onChange={ev => this.setState({pokemonName:ev.target.value})}
                ></input>
                <button type='submit' disabled={!pokemonName}>Register a Pokemon</button>
            </form>
        )
    }

}

export default connect(
null,
(dispatch)=>{
    return{
        add:async(pokemonName)=>{
            const pokemon = (await axios.post('/api/pokemons',{name:pokemonName})).data
            dispatch({type:'Create_Pokemon',pokemon})
        }
    }
}
)(CreatePokemon);