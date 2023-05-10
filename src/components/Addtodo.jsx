import React, { useState } from "react";
import Displaycount from "./Displaycount";
import {addTodo} from '../redux/action/todo'
import { connect } from "react-redux";
import { v4 } from "uuid";
const Addtodo = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    id:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //ADD todo in store
    addTodo({...todo,id:v4()})
    
    setTodo({
      title: "",
      description: "",
      id:""
    });
  };
  return (
    <>
      <h1>Add todo</h1>
      <Displaycount />
      <form onSubmit={handleSubmit}>
        <div className="container my-4">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={todo.title}
              onChange={(event) => {
                setTodo({ ...todo, title: event.target.value });
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={todo.description}
              onChange={(event) => {
                setTodo({ ...todo, description: event.target.value });
              }}
              required
            />
          </div>

          <button
            disabled={todo.title.length < 3 || todo.description.length < 5}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps=()=>({})
const mapDispatchToProps=(dispatch)=>({
  addTodo:(todo)=>(dispatch(addTodo(todo)))
})
export default connect(mapStateToProps,mapDispatchToProps) (Addtodo);
