import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>class component {this.props.name} from {this.props.heroname} </h1>
    }
}

export default Welcome