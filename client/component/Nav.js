import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({trainers, pokemons})=>{
    return(
        <div>
            <h2>Welcome to my Pokemon World</h2>
            <div id='navBar'>
                <Link to ='/'>Main</Link>
                <Link to ='/trainers'>Trainers({trainers.length})</Link>
                <Link to ='/pokemons'>Pokemons({pokemons.length})</Link>
            </div>
        </div>
        
    ) 
}

export default Nav