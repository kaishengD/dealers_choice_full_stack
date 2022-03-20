import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
class _Trainers extends React.Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        const {trainers} = this.props
        return(
            trainers.map((trainer)=>{
                return <li key={trainer.id}>{trainer.name}</li>
            })
        )
    }
}

const Trainers = connect(state => state,
(dispatch)=>{
    return{
        load: async()=>{
            const trainers = (await axios.get('/api/trainers')).data
            dispatch({type:'Load_Trainers',trainers})
        }
    }
})(_Trainers)
export default Trainers;