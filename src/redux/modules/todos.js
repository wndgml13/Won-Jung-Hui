// Action value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트",
      body: "react를 배워봅시다.",
      isDone: false,
    },
  ],
  todo: {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  },
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload], // todos를 새로운 거로 덮어씌운다
      };
    default:
      return state;
  }
};
export default todos;















