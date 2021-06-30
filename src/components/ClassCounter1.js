import React,{Component} from 'react'

class ClassCounter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState!==this.state.console){
            console.log('updating Document Title')
        }
        document.title=`clicked ${this.state.count} times`
    }

    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    changeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    render (){
        return(
        <>
            <input type="text" value={this.state.name} onChange={this.changeName}/>
           <button onClick={this.incrementCount}>click {this.state.count} times</button> 
        </>
        )
    }
}

export default ClassCounter1
