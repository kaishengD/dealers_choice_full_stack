//main page App
import React from 'react';
import Nav from './Nav';
import Trainers from './Trainers';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

class _App extends React.Component{
    render(){
        const {trainers, pokemons} = this.props
        return (
            <Router>
                <div id = 'main'>
                    <Nav trainers={trainers} pokemons={pokemons}/>
                    <Route path = '/trainers' component = {Trainers}></Route>
                </div>
            </Router>
        )
    }
}

const App = connect(state=>state)(_App)
export default App