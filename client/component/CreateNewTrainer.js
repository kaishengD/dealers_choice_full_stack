import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class CreateTrainer extends React.Component{
    constructor(){
        super(),
        this.state={
            trainerName: ''
        }
    }
    render(){
        const {trainerName} = this.state
        return (
            <form onSubmit={(ev)=>{
                ev.preventDefault();
                this.props.add(this.state.trainerName)
            }}>
                <input name = 'name' 
                       value = {trainerName} 
                       placeholder = 'enter trainer name' 
                       onChange={ev => this.setState({trainerName:ev.target.value})}
                ></input>
                <button type='submit' disabled={!trainerName}>I am a new trainer!</button>
            </form>
        )
    }

}
const mapDispatch = (dispatch,{history})=>{
    return{
        add:async(trainerName)=>{
            const trainer = (await axios.post('/api/trainers',{name:trainerName})).data
            dispatch({type:'Create_Trainer',trainer},history)
            history.push(`/trainers`)
        }
    }
}
export default connect(
null,
mapDispatch
)(CreateTrainer);