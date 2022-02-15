import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Todo, perPageRange } from "./types";

export interface TodosState {
  list: Array<Todo>;
  status: "idle" | "loading" | "failed";
  perPage: number;
  currentPage: number;
  pageList: Array<Todo>;
}

const initialState: TodosState = {
  list: [],
  status: "idle",
  perPage: perPageRange[0],
  currentPage: 0,
  pageList: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  // The value we return becomes the `fulfilled` action payload
  return response.json();
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTodosPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload;
      state.currentPage = 0;
      state.pageList = getPageTodos(
        state.list,
        state.perPage,
        state.currentPage
      );
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = action.payload;
        state.pageList = getPageTodos(
          state.list,
          state.perPage,
          state.currentPage
        );
      });
  },
});

export const { setTodosPerPage } = todosSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
//export const selectCount = (state: RootState) => state.counter.value;

export default todosSlice.reducer;

// helper functions

function getPageTodos(
  todosList: Todo[],
  todosPerPage: number,
  currentPage: number
): Todo[] {
  const currentTodo = currentPage * todosPerPage;
  return todosList.slice(currentTodo, currentTodo + todosPerPage);
}
