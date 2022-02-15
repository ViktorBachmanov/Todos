import React, { useState } from "react";
import { perPageRange } from "./types";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { setTodosPerPage as setTodosPerPageAction } from "./todosSlice";

function mapStateToProps(state: RootState) {
  return {
    todosPerPage: state.todos.perPage,
  };
}

const mapDispatchToProps = {
  setTodosPerPage: setTodosPerPageAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PaginationBar(props: PropsFromRedux) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    props.setTodosPerPage(parseInt(e.target.value));
  };

  return (
    <div>
      <span>Todos per page</span>
      <select value={props.todosPerPage} onChange={handleChange}>
        {perPageRange.map((val) => {
          return (
            <option key={val} value={val}>
              {val}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default connector(PaginationBar);
