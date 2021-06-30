import React,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':return state+1
        case 'decrement':return state-1
        case 'reset':return initialState
        case 'default': return state
    }
}

const CounterOne = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [state1, dispatch1] = useReducer(reducer, initialState)
    return (
        <div>
            <div>State {state}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decremnet</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <div>State {state1}</div>
            <button onClick={()=>dispatch1('increment')}>Increment</button>
            <button onClick={()=>dispatch1('decrement')}>Decremnet</button>
            <button onClick={()=>dispatch1('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
