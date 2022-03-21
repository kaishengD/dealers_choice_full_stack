import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store/store';
const release = async(catchaction)=>{
    await axios.delete(`/api/catches/${catchaction.id}`)
    store.dispatch({type:'Release_a_Pokemon',catchaction})
}
class _PokemonsForTrainer extends React.Component{    
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.load(id);
    }
    render(){
        const {pokemonsfortrainer} = this.props
        return(
            <div>
                {pokemonsfortrainer.map((pokemon)=>{
                    return <li key={pokemon.pokemon.id}>{pokemon.pokemon.name}
                        <button onClick={()=> release(pokemon)}>release</button>
                    </li>
                })}
            </div>

        )
    }

}
const PokemonsForTrainer = connect(state=>state,
(dispatch)=>{
    return{
        load:async(trainerid)=>{
            const pokemonsfortrainer = (await axios.get(`/api/trainers/${trainerid}`)).data
            dispatch({type:'Load_Pokemons_For_Trainers',pokemonsfortrainer})
        }
    }
}    
)(_PokemonsForTrainer)

export default PokemonsForTrainer