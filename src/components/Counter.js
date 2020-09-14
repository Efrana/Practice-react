import React, {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            error:'',
            errror:''
        }
    }
    increment(){
        let error='';
        if(this.state.count<10){
            this.setState({
                count: this.state.count +1
            })
            console.log(this.state.count)
        }

    }
    decrement(){
        let errror=''
        if(this.state.count>0){
            this.setState({
                count: this.state.count -1
            })
            console.log(this.state.count)

        }
    }
    render(){
        return(
            <div>
                {/* <div>count-{this.state.count}</div> */}
                <input type="number"  max="10" min={this.state.count}/>
                <p><b>Availability:</b>{this.state.error}</p>
                <button onClick={()=> this.increment()}>Inc</button>
                <button onClick={()=> this.decrement()}>Dec</button>
                <div style={{fontSize:12,color:"red"}}>{this.state.error}</div>
                
            </div>
        )
    }

}

export default Counter