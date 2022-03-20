import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
class _Trainers extends React.Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        const {trainers} = this.props
        console.log(trainers)
        return(
            <div>
                {trainers.map((trainer)=>{
                    return <li>{trainer.name}</li>
                })}
            </div>
    
        )
    }
}

const Trainers = connect(state => state,
(dispatch)=>{
    return{
        load: async()=>{
            const trainers = (await axios.get('/api/trainers')).data
            console.log(trainers)
            dispatch({type:'Load_Trainers',trainers})
        }
    }
})(_Trainers)
export default Trainers;