import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetchingOne = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/567')
        .then(res=>{
            setIsLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(err=>{
            setIsLoading(false)
            setError('Something went wrong')
            setPost({})
        })
    },[])
    return (
        <div>
            {isLoading?'Loading':post.title}
            {error?error:null}
        </div>
    )
}

export default DataFetchingOne
