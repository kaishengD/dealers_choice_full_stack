import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store/store';
const deletePokemon = async(pokemon)=>{
    await axios.delete(`/api/pokemons/${pokemon.id}`)
    store.dispatch({type:'Remove_a_Pokemon',pokemon})
}
class _Pokemons extends React.Component{
    componentDidMount(){
        this.props.load();
    }

    render(){
        const {pokemons} = this.props
        return(
            pokemons.map((pokemon)=>{
                return <li key={pokemon.id}>{pokemon.name}
                    <button onClick={()=> deletePokemon(pokemon)}>X</button>
                </li>
            })
    
        )
    }
}

const Pokemons = connect(state => state,
(dispatch)=>{
    return{
        load: async()=>{
            const pokemons = (await axios.get('/api/pokemons')).data
            dispatch({type:'Load_Pokemons',pokemons})
        }
    }
})(_Pokemons)
export default Pokemons;