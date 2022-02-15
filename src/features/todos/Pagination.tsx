import React, { useState } from "react";
import { perPageRange } from "./types";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { setTodosPerPage as setTodosPerPageAction } from "./todosSlice";

function mapStateToProps(state: RootState) {
  return {
    todosPerPage: state.todos.perPage,
    currentPage: state.todos.currentPage,
  };
}

const mapDispatchToProps = {
  setTodosPerPage: setTodosPerPageAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Pagination(props: PropsFromRedux) {
  const { todosPerPage, currentPage } = props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    props.setTodosPerPage(parseInt(e.target.value));
  };

  const currentTodoNo = currentPage * todosPerPage;

  return (
    <div className="Pagination">
      <span>Todos per page: </span>
      <select value={todosPerPage} onChange={handleChange}>
        {perPageRange.map((val) => {
          return (
            <option key={val} value={val}>
              {val}
            </option>
          );
        })}
      </select>

      <span>{`${currentTodoNo + 1}-${currentTodoNo + todosPerPage}`}</span>
    </div>
  );
}

export default connector(Pagination);
