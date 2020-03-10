import React, { Component } from 'react'
import Grocery from './Grocery'
import GroceryForm from './GroceryForm'

class GroceryList extends Component {
  constructor(props){
    super(props)
      this.state ={
        groceries: [
          {item: 'Milk', isDone: false},
          {item: 'Eggs', isDone: false}
        ]
      }
    }
  

  renderGroceries = () => {
    const {groceries} = this.state;
    return groceries.map((grocery, i)=>
    <Grocery key={`groceryItem${i}`} item= {grocery.item} isDone = {grocery.isDone} groceryClick = {()=> this.groceryClicked(i)}/>
    )
  }
  groceryClicked = (id) =>{
    const {groceries} = this.state
    const newGrocery = groceries.map((grocery,i)=>{
      if(i === id){
        return({
          ...grocery,
          isDone: !grocery.isDone
        })
      }
      return grocery
    })
    this.setState({
      groceries: newGrocery
    })
  }

  addGrocery = (grocery) => {
    this.setState({
      groceries: [...this.state.groceries, { item: grocery, isDone: false}]
    })
  }

  render(){
    return(
      <div>
        <GroceryForm addGrocery ={this.addGrocery}/>
      {this.renderGroceries()}
      
      </div>
    )
  }
}

export default GroceryList
