import React, { Component } from 'react'
import axios from 'axios'

class finalSpaceAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             characters:[]  
        }
    }

    componentDidMount(){
        axios.get('https://finalspaceapi.com/api/v0/character/')
        .then(res=>{
            console.log(res)
            this.setState({
                characters:res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        const {characters}=this.state
        return (
            <>
                <h1>Final Space</h1>
                <div className=''></div>
            </>
        )
    }
}

export default finalSpaceAPI
