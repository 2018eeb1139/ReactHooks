import React, { useState } from 'react'

const Counter = () => {
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)
    const incrementOne = () => {
        setCounterone(counterone + 1)
    }
    const incrementTwo = () => {
        setCountertwo(countertwo + 1)
    }
    const isEven=(counterone)=>{
        let i=0
        while(i<200000) i++
        if(counterone%2===0) return true
        else return false
    }
    return (
        <>
            <div>
                <button onClick={incrementOne}>Count-{counterone}</button>
                <span>{isEven(counterone)?'Even':'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count-{countertwo}</button>
            </div>
        </>
    )
}

export default Counter
