// 새롭게 추가한 부분
import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import todos from "../modules/todos";

const rootReducer = combineReducers({
    todos: todos, // <-- 새롭게 추가한 부분
});

const store = createStore(rootReducer);

export default store;