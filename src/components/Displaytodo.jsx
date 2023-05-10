import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/action/todo";

const Displaytodo = ({todos,deleteTodo}) => {
  
  return (
    <div className="col-md-3">
      {todos.map((todo, index) => {
        return (
          <div className="card my-4" key={index}>
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <p className="card-text">{todo.description}</p>
              <button className="btn btn-danger" onClick={(event)=>{deleteTodo(todo.id)}}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps=(state)=>{
  
  return {todos:state.todoReducer}
}
const mapDispatchToProps=(dispatch)=>({
  deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})
export default connect(mapStateToProps,mapDispatchToProps) (Displaytodo);
