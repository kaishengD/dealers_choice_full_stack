import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
class _Trainers extends React.Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        const {trainers} = this.props
        return(
            trainers.map((trainer)=>{
                return <li key={trainer.id}><Link to={`/trainers/${trainer.id}`}>{trainer.name}</Link></li>
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