import React from "react";
import Item from "./Item";
import Header from "./Header";
import todosData from "../todosData";

class ToDoApp extends React.Component {
  constructor(){
    super()
    this.state = {toDoItems : todosData}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      return {
        toDoItems : prevState.toDoItems.map(
        function(item){ 
          item.id === id && (item.completed = !item.completed)
          return item
        })
      }
    })
  }
  
  render(){
    const toDos = this.state.toDoItems.map(item => <Item key={item.id} task={item} handleChange={this.handleChange}/>)
    return (
      <div>
        <Header />
        {toDos}
      </div>
    );
  }
}

export default ToDoApp;