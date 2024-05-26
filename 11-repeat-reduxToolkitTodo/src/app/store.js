import { configureStore } from "@reduxjs/toolkit";

import todoRecuder from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoRecuder,
});
