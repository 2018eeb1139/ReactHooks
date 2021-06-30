import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [setidfrombutton, setSetidfrombutton] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${setidfrombutton}`)
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[setidfrombutton])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={()=>setSetidfrombutton(id)}>Fetch Post</button>
            {/* {
                post.map(post=><li key={post.id}>{post.title}</li>)
            } */}
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
