import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
class _Pokemons extends React.Component{
    componentDidMount(){
        this.props.load();
    }

    render(){
        const {pokemons} = this.props
        return(
            pokemons.map((pokemon)=>{
                return <li key={pokemon.id}>{pokemon.name}</li>
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