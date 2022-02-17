import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { fetchTodos as fetchTodosAction } from "../features/todos/todosSlice";
import AppBar from "./AppBar";

const mapDispatchToProps = {
  fetchTodos: fetchTodosAction,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Layout(props: PropsFromRedux) {
  const { fetchTodos } = props;

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="Layout">
      <AppBar />

      <div className="container pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12">
        <Outlet />
      </div>
    </div>
  );
}

export default connector(Layout);
