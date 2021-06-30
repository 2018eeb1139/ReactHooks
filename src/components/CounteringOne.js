import React, { useState } from 'react'
import useCounter from './Hooks/useCounter'

function CounteringOne() {
    const [count,increment,decrement,reset]=useCounter(0,3)
    return (
        <div>
            <h2>Count={count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounteringOne