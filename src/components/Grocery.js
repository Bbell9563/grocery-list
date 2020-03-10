import React from 'react'

const Grocery = ({item, isDone, groceryClick}) => {
  return (
    <div onClick={groceryClick} style={isDone ? {...styles.grocery, ...styles.complete} : styles.grocery}>
      <h5>{item}</h5>
    </div>);
}

const styles ={
  grocery: {cursor:'pointer', border:'1px solid black'},
  complete: {color: "grey", textDecoration: 'line-through'}
}


export default Grocery