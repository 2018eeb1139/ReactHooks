import React,{useState} from 'react'

const UserForm = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const sumbitHandler=(e)=>{
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
    }
    return (
        <div>
            <form onSubmit={sumbitHandler}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstname} onChange={e=>setFirstname(e.target.value)}/>    
                </div>    
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastname} onChange={e=>setLastname(e.target.value)}/>    
                </div>  
                <button>Submit</button>  
            </form>        
        </div>
    )
}

export default UserForm
