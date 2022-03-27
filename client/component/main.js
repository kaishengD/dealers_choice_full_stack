//main page App
import React from 'react';
import Nav from './Nav';
import Trainers from './Trainers';
import Pokemons from './Pokemons';
import PokemonsForTrainer from './PokemonForTrainer';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import CreatePokemon from './CreatePokemon';
import CreateCatches from './CreateCatches';
import CreateTrainer from './CreateNewTrainer';
class _App extends React.Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        return (
            <Router>
                <div id = 'main'>
                    <Nav />
                    <Route exact path= '/' component={CreateTrainer}></Route>
                    <Route exact path = '/trainers' component = {CreateCatches}></Route>
                    <Route exact path = '/trainers' component = {Trainers}></Route>
                    <Route path = '/pokemons' component = {CreatePokemon}></Route>
                    <Route path = '/pokemons' component = {Pokemons}></Route>
                    <Route exact path = '/trainers/:id' component = {PokemonsForTrainer}></Route>
                </div>
            </Router>
        )
    }
}

const App = connect(state=>state,
(dispatch)=>{
    return{
        load: async()=>{
            const trainers = (await axios.get('/api/trainers')).data
            const pokemons = (await axios.get('/api/pokemons')).data
            dispatch({type:'Load_Trainers',trainers})
            dispatch({type:'Load_Pokemons',pokemons})
            
        }
    }
})(_App)
export default App