import { createStore } from "redux";
const store = createStore( (state = {trainers:[],pokemons:[]},action)=>{
    if(action.type === 'Load_Trainers'){
        state = {...state, trainers: action.trainers};
        console.log(action.type)
        console.log(state)
    }
    return state;
})

export default store;