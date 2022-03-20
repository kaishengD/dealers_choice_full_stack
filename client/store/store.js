import { createStore } from "redux";
const store = createStore((state = {trainers:[],pokemons:[],pokemonsfortrainer:[]},action)=>{

    if(action.type === 'Load_Trainers'){
        state = {...state,trainers:action.trainers};
    }
    if(action.type === 'Load_Pokemons'){
        state = {...state, pokemons:action.pokemons};
    }
    if(action.type === 'Load_Pokemons_For_Trainers'){
        state = {...state, pokemonsfortrainer:action.pokemonsfortrainer};
    }
    return state;
})

export default store;