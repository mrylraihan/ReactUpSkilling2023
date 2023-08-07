import {createStore} from 'redux'


const initial = {
    name:'',
    toggle:true
}

const nameReducer = (state, action)=>{
    if(action.type == 'name'){
        return {...state, name:action.name}
    }else if(action.type == 'toggle'){
        return {...state, toggle: !state.toggle}
    }else{
        return state
    }
}

const store = createStore(nameReducer, initial)

export default store