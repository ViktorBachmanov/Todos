import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
//import { RootState } from "../app/store";
import { fetchTodos as fetchTodosAction } from "../features/todos/todosSlice";
import AppBar from "./AppBar";

const mapDispatchToProps = {
  fetchTodos: fetchTodosAction,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Layout(props: PropsFromRedux) {
  useEffect(() => {
    console.log("Layout useEffect()");

    props.fetchTodos();
  }, []);

  return (
    <div className="Layout dark:bg-zinc-900">
      <AppBar />

      <Outlet />
    </div>
  );
}

export default connector(Layout);
