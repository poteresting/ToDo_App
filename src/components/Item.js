import React from "react";

function Item(props) {

  const finishedStyle = {
    textDecoration: "line-through",
    color: "#808080",
    fontStyle: "italic"
  } 

  return (
    <div className="taskList">
      <ul>
        <input type="checkbox" checked={props.task.completed} onChange={()=>props.handleChange(props.task.id)}/>
        <label className="task" style={props.task.completed ? finishedStyle : null}>{props.task.text}</label><br/>
        <hr className="line"/>
      </ul>
    </div>);
}

export default Item;