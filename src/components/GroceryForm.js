import React, {Component} from 'react'


class GroceryForm extends Component {
  state = { name: ""}
  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addGrocery(this.state.name)
    this.setState({name:''})
  }

  handleChange = (e) =>{
    this.setState({
      name: e.target.value
    })
  }
  render(){
    return(
      <form onSubmit ={this.handleSubmit}>
        <input onChange = {this.handleChange} value={this.state.name} required placeholder="Add Item"></input>
      </form>
    )
  }
}

export default GroceryForm