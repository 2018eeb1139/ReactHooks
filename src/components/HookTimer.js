import React ,{useState,useEffect,useRef}from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0)
    const ref = useRef()
    useEffect(() => {
        ref.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return () => {
            clearInterval(ref.current)
        }
    }, [])
    return (
        <div>
            Hook Timer-{timer}   
            <button onClick={()=>clearInterval(ref.current)}>Clear Hook Timer</button> 
        </div>
    )
}

export default HookTimer
