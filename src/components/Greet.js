import React from 'react'
// function Greet(){
//     return <h1>Hello Efrana</h1>
// }

const Greet = (props) => {
    console.log(props)
return <h1>Functional component {props.name} from {props.heroname}</h1>

}

export default Greet