import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

const CreateCatches =()=>{
    return (
        <form onSubmit={(ev)=>{
            ev.preventDefault();
        }}>
            <div>
                <option>--select trainers</option><option>--select trainers</option>
                <button type='submit'>Catch!</button>
            </div>

        </form>
    )
}

export default CreateCatches