import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import Card from "./Card";
import Pagination from "./Pagination";
import AddTodo from "./AddTodo";

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos.pageList,
    status: state.todos.status,
  };
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Todos(props: PropsFromRedux) {
  if (props.status === "loading") {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="dark:text-slate-300">
      <AddTodo />
      <Pagination />
      <div
        className="
          columns-1 
          sm:columns-2 
          lg:columns-3 
          xl:columns-4
          2xl:columns-5
        "
      >
        {props.todos.map((todo) => {
          return <Card key={todo.id} todo={todo} />;
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default connector(Todos);
