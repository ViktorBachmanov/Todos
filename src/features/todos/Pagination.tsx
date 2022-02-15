import React, { useState } from "react";
import { perPageRange } from "./types";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import {
  setTodosPerPage as setTodosPerPageAction,
  incrementPage as incrementPageAction,
  decrementPage as decrementPageAction,
  jumpToFirstPage as jumpToFirstPageAction,
  jumpToLastPage as jumpToLastPageAction,
} from "./todosSlice";
import ChangePage from "./ChangePage";

import { ReactComponent as ChevronLeft } from "./svg/chevron-left.svg";
import { ReactComponent as ChevronDoubleLeft } from "./svg/chevron-double-left.svg";
import { ReactComponent as ChevronRight } from "./svg/chevron-right.svg";
import { ReactComponent as ChevronDoubleRight } from "./svg/chevron-double-right.svg";

function mapStateToProps(state: RootState) {
  return {
    todosPerPage: state.todos.perPage,
    currentPage: state.todos.currentPage,
    allTodos: state.todos.list,
  };
}

const mapDispatchToProps = {
  setTodosPerPage: setTodosPerPageAction,
  incrementPage: incrementPageAction,
  decrementPage: decrementPageAction,
  jumpToFirstPage: jumpToFirstPageAction,
  jumpToLastPage: jumpToLastPageAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Pagination(props: PropsFromRedux) {
  const { todosPerPage, currentPage, allTodos } = props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    props.setTodosPerPage(parseInt(e.target.value));
  };

  const todosListLength = allTodos.length;
  const currentTodoNo = currentPage * todosPerPage;
  let lastTodoNo = currentTodoNo + todosPerPage;
  if (lastTodoNo > todosListLength) {
    lastTodoNo = todosListLength;
  }
  const isLastPage = currentTodoNo + todosPerPage >= todosListLength;

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

      <span>
        {`${currentTodoNo + 1}-${lastTodoNo} of 
        ${todosListLength}`}
      </span>

      <span style={{ display: "flex" }}>
        <ChangePage disabled={currentPage === 0} action={props.jumpToFirstPage}>
          <ChevronDoubleLeft />
        </ChangePage>

        <ChangePage disabled={currentPage === 0} action={props.decrementPage}>
          <ChevronLeft />
        </ChangePage>

        <ChangePage disabled={isLastPage} action={props.incrementPage}>
          <ChevronRight />
        </ChangePage>

        <ChangePage disabled={isLastPage} action={props.jumpToLastPage}>
          <ChevronDoubleRight />
        </ChangePage>
      </span>
    </div>
  );
}

export default connector(Pagination);
