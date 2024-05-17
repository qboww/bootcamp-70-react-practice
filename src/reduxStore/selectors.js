export const selectToDos = state => state.todos.items;
export const selectFilter = state => state.filter;
export const selectPoints = state => state.points;
export const selectLoading = state => state.todos.isLoading;
export const selectError = state => state.todos.error;
export const selectCurrentToDo = state => state.todos.currentToDo;
