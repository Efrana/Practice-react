import React, {Component} from 'react'

class DynamicField extends Component{
    
   
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userData:[],
            countries:[],
            count:1,
            totalAmount:0,
            // productPrice:0,
                       
            productList:[{
                id:Math.random(),
                name: '',
                quantity: '',
                price: '',
                total:''
                
            }]
            
        }
    }

    onChange(e) {
        if (["name", "quantity", "price","total"].includes(e.target.name)) {
            let total_price=0
            let productList = [...this.state.productList]
            // console.log('list',productList);
            productList[e.target.dataset.id][e.target.name] = e.target.value;
            productList[e.target.dataset.id]["total"]=Number(productList[e.target.dataset.id].quantity)*Number(productList[e.target.dataset.id].price)

            // this.state.productList.map(function(product){
            //     total_price =product.price*product.quantity
            // })
            console.log('map2',productList) 
            this.setState({
                // productPrice:total_price,
                total:Number(productList[e.target.dataset.id].quantity)*Number(productList[e.target.dataset.id].price)
            })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }


    addRow(){
            this.setState((prevState) => ({
                productList:[...prevState.productList, 
                    { id: Math.random(),
                      name:"",
                      quantity:"",
                      price:"",
                      totalprice:"",
                       }],
                count:this.state.count+1,
            
                }));
                this.state.productList.map(function(product){
                    let total_price =product.price
                    // productList.totalprice=total_price
                    console.log('map',total_price)
        
                })
                
                
            
    }

    deleteRow(index){

        this.state.productList.splice(index,1)
        this.setState({
            productList:this.state.productList,
            count: this.state.count -1,
            // totalAmount: this.state.totalAmount-this.state.productList.total
        })
    
        
    }
    onSubmit(e) {
        e.preventDefault()
        let userData=[]
        let total_price=0
        userData.push(this.state.productList)
        localStorage.setItem('userdata', JSON.stringify(userData))

        let counter = JSON.parse(localStorage.getItem('userdata')) || []
    
        this.state.productList.map(function(product){
            total_price += +parseFloat(product.total);
        })
        
        this.setState({
            totalAmount:total_price
        })


    }

 

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                <h1 style={{color: "red"}}> script for duplicate multiple dom </h1>
                <br/>
                <button onClick={(e)=>this.addRow(e)} style={{width: "100px",padding: "20px",margin: "20px",position:"relative"}} >Add Row</button>
                <br/>
                
                {
                    this.state.productList.map((country,index)=>{
                        let pname = `name-${index}`

                        return(
                            <div key={index}>
                                <div style={{ width: "850px",border: "2px solid black",padding: "10px",margin: "10px"}}>
                                
                                <select style={{width: "100px",padding: "20px",margin: "20px",position:"relative"}}>
                                    <option>Phone</option>
                                    <option>TV</option>
                                    <option>AC</option>
                                </select> 
                                <input name="quantity"placeholder="Quantity" id="Quantity" data-id= {index} value={this.state.quantity} onChange={this.onChange}  style={{width: "100px",padding: "20px",margin: "20px",position:"relative"}} />
                                <input  name="price" placeholder="Price" id="Price" data-id= {index} value={this.state.price} onChange={this.onChange} style={{width: "100px",padding: "20px",margin: "20px",position:"relative"}}/>
                                <input id={pname} data-id={index} disabled value={country.total} style={{width: "100px",padding: "20px",margin: "20px",position:"relative"}}/>
                                
                                <button onClick={(e)=>this.deleteRow(index)} style={{width: "100px",padding: "20px",margin: "20px",position:"relative"}}>Detete</button>
                                <br/>
                                </div>
                            </div>
                            
                        )
                        
                    })
                }
                
                <h3 >Total Quantity:{this.state.count}</h3>
                <h3 >Total Amount:{this.state.totalAmount}</h3>
                
                <button  style={{width: "300px",padding: "20px",margin: "20px"}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default DynamicField