import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class CreateCatches extends React.Component{
    constructor(){
        super();
        this.state = {
            trainerId:'',
            pokemonId:''
        }
    }
    render(){
        const {trainers,pokemons} = this.props
        const{trainerId,pokemonId} = this.state
        return (
            <form onSubmit={(ev)=>{
                ev.preventDefault();
                this.props.createCatch(this.state.trainerId,this.state.pokemonId)
            }}>
                <div id='catchRow'>
                    <select value = {trainerId} 
                            name ='trainerId'
                            onChange={ev => this.setState({trainerId:ev.target.value})}
                    >
                        <option>--select trainer--</option>
                        {
                            trainers.map((trainer)=>{
                                return (
                                    <option value={trainer.id}key={trainer.id}>{trainer.name}</option>
                                )
                            })
                        }
                    </select>

                    <select value = {pokemonId} 
                            name ='pokemonId'
                            onChange={ev => this.setState({pokemonId:ev.target.value})}
                    >
                        <option>--select pokemon--</option>
                        {
                            pokemons.map((pokemon)=>{
                                return (
                                    <option  value={pokemon.id} key={pokemon.id}>{pokemon.name}</option>
                                )
                            })
                        }
                    </select>    
                    <button type='submit' >Catch!</button>
                </div>

            </form>
        )
    }
}

const mapDispatch = (dispatch)=>{
    return{
        createCatch: async(tId,pId)=>{
            const newCatch = (await axios.post('/api/catches',{trainerId:tId,pokemonId:pId})).data
            dispatch({type:'Create_Catches',newCatch})
        }
    }
}

export default connect(
state=>state,
mapDispatch
)(CreateCatches)