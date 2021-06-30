import React,{useState,useEffect} from 'react'

const HookCounter1 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log('use Effect -updating hook title')
        document.title=`Clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
        </div>
    )
}

export default HookCounter1
