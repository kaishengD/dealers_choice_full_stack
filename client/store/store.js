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
    if(action.type === 'Release_a_Pokemon'){
        const catchactions = state.pokemonsfortrainer.filter(catchaction=> catchaction.id !== action.catchaction.id )
        state = {...state,pokemonsfortrainer:catchactions}
    }
    if(action.type === 'Create_Pokemon'){
        const pokemons = [...state.pokemons,action.pokemon]
        state = {...state, pokemons:pokemons};
    }
    if(action.type === 'Create_Trainer'){
        const trainers = [...state.trainers,action.trainer]
        state = {...state, trainers:trainers};
    }
    if(action.type === 'Create_Catch'){
        const catchactions = [...state.pokemonsfortrainer,action.newCatch]
        state = {...state, pokemonsfortrainer:catchactions};
    }
    return state;
})

export default store;
