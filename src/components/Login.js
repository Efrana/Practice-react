import React, {Component} from 'react'
import axios from 'axios'
class Login extends Component{
    login(){
        console.log("state",this.state)
        fetch('https://nodejs-backend-apis.herokuapp.com/api/login',{
            method:"POST",
            headers:{
                // "Accept":"application/json",
                "Contant-Type":"application/json",
            },
            body:JSON.stringify(this.state)
        })
    }

      render(){
          return(
              <div>
                  <div>
                      <input type="text"
                      onChange={(e)=>{this.setState({email:e.target.value})}}/>
                      <br></br>
                      <input type="text"
                      onChange={(e)=>{this.setState({password:e.target.value})}}/>
                      <br></br>
                      <button onClick={()=>this.login()}> Login</button>

                  </div>
                  
              </div>
          )
      }
}


export default Login