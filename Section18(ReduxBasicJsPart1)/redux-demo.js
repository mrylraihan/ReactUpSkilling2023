const redux = require('redux')

const initial = {counter:0}
const counterReducer = (state, action) =>{
    if(action.type == 'add'){
        return {
            counter:state.counter + 1
        };
    }else if(action.type == 'minus'){
        return {counter:state.counter - 1}
    }else{
        return state
    }
}


const store = redux.createStore(counterReducer, initial);

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}
console.log(initial, ' initial')
console.log(store.getState(),' store')


store.subscribe(counterSubscriber)
store.dispatch({type:'add'})
store.dispatch({type:'add'})
store.dispatch({type:'add'})

console.log(store.getState(),' store')