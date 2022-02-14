import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";

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
      {props.todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
}

export default connector(Todos);
