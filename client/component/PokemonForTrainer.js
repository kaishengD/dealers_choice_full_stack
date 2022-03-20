import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
class _PokemonsForTrainer extends React.Component{    
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.load(id);
    }
    delete(){
        console.log('thisis delete')
    }
    render(){
        const {pokemonsfortrainer} = this.props
        return(
            <div>
                {pokemonsfortrainer.map((pokemon)=>{
                    return <li key={pokemon.pokemon.id}>{pokemon.pokemon.name}<button onClick={this.delete}>x</button></li>
                })}
            </div>

        )
    }

}
const PokemonsForTrainer = connect(state=>state,
(dispatch)=>{
    return{
        load: async(id)=>{
            const pokemonsfortrainer = (await axios.get(`/api/trainers/${id}`)).data
            dispatch({type:'Load_Pokemons_For_Trainers',pokemonsfortrainer})
        }
    }
}    
)(_PokemonsForTrainer)

export default PokemonsForTrainer