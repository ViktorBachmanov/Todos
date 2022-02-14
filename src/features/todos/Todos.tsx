import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import Card from "./Card";

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos.list,
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
      <h2>Todos</h2>
      <div
        className="
          columns-1 
          sm:columns-2 
          md:columns-3 
          lg:columns-4 
          xl:columns-5
          2xl:columns-6
        "
      >
        {props.todos.map((todo) => {
          return <Card key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default connector(Todos);
