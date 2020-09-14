import React, {Component} from 'react'
import axios from 'axios'
class Datafetchclass extends Component{
    constructor(props) {
        super(props);
        this.state = {posts: []};
      }
      componentDidMount(){
        axios.get('https://nodejs-backend-apis.herokuapp.com/api/product')
          .then(response => {
            this.setState({ posts: response.data });
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      render(){
          return(
              <div>
                 <h2>
                     fetch data
                 </h2>
                 {
                     this.state.posts.map((item,i)=>
                     <div>
                         <p>
                             {i}{item.title}{item.body}
                         </p>
                         </div>
                     )
                 }
              </div>
          )
      }
}


export default Datafetchclass