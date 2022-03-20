//main page App
import React from 'react';
import Nav from './Nav';
import Trainers from './Trainers';
import Pokemons from './Pokemons';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
class _App extends React.Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        const {trainers, pokemons} = this.props
        return (
            <Router>
                <div id = 'main'>
                    <Nav trainers={trainers} pokemons={pokemons}/>
                    <Route path = '/trainers' component = {Trainers}></Route>
                    <Route path = '/pokemons' component = {Pokemons}></Route>
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