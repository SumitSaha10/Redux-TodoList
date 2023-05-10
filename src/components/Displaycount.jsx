import React from "react";
import { connect } from "react-redux";

const Displaycount = ({todos}) => {
  return (
    <>
      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">Number of todo</h5>
          <p className="card-text">{todos.length}</p>
        </div>
      </div>
    </>
  );
};
const mapStateToProps=(state)=>({todos:state.todoReducer})
const mapDispatchToProps=(dispatch)=>({})
export default connect(mapStateToProps,mapDispatchToProps) (Displaycount);
