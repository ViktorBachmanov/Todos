import React from "react";
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
      <div className="m-2">
        <span>Todos per page: </span>
        <select value={todosPerPage} onChange={handleChange} className="p-2">
          {perPageRange.map((val) => {
            return (
              <option key={val} value={val}>
                {val}
              </option>
            );
          })}
        </select>
      </div>

      <span className="m-2">
        {`${currentTodoNo + 1}-${lastTodoNo} of 
        ${todosListLength}`}
      </span>

      <span style={{ display: "flex" }}>
        <ChangePage disabled={currentPage === 0} action={props.jumpToFirstPage}>
          <ChevronDoubleLeft title="First page" />
        </ChangePage>

        <ChangePage disabled={currentPage === 0} action={props.decrementPage}>
          <ChevronLeft title="Previous page" />
        </ChangePage>

        <ChangePage disabled={isLastPage} action={props.incrementPage}>
          <ChevronRight title="Next page" />
        </ChangePage>

        <ChangePage disabled={isLastPage} action={props.jumpToLastPage}>
          <ChevronDoubleRight title="Last page" />
        </ChangePage>
      </span>
    </div>
  );
}

export default connector(Pagination);
