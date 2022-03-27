import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Nav = ({trainers,pokemons})=>{
    return(
        <div>
            <h2 className='title'>Welcome to my Pokemon World</h2>
            <div id='navBar'>
                <Link to ='/'>Main</Link>
                <Link to ='/trainers'>Trainers({trainers.length})</Link>
                <Link to ='/pokemons'>Pokemons Found({pokemons.length})</Link>
            </div>
        </div>
        
    ) 
}

export default connect(state => state)(Nav)