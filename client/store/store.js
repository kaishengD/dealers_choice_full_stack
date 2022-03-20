import { createStore } from "redux";
const store = createStore( (state = {trainers:[],pokemons:[]},action)=>{
    if(action.type === 'Load_Trainers'){
        state = {...state, trainers: action.trainers};
    }
    if(action.type === 'Load_Pokemons'){
        state = {...state, pokemons: action.pokemons};
    }
    return state;
})

export default store;