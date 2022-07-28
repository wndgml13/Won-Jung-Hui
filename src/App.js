
import "./index.css"
import React from "react"
import {useState} from "react";
import TodoList from "./pages/TodoList";



function App () {
const [title, setTitle] = useState("");
const [contents, setContents] = useState("");
const [Todos, setTodos] = useState([
  {
    id:1, 
    title:
    <div>
      <h2>리액트 공부하기</h2>
      <p>리액트 기초를 공부해봅시다.</p>
      
    </div>
    
    
  }
])

return(
<div className="layout">
  {/* 레이아웃 전체 */}
  <div className="header">
    <div>My Todo List</div>
    <div>React</div>
  </div>
  {/* My Todo List, React 헤더 부분 */}
  <div className="title">
    <div>제목
    <input className="title-input" type="text" name="title" value={title}
      onChange={(event) => {
        setTitle(event.target.value);
      }}></input>
      </div>
    <div>내용
    <input className="contents-input" type="text" name="contents"
    value={contents}
      onChange={(event) => {
        setContents(event.target.value);
      }}></input>
      </div>
    <div> 
    <button className="btn" onClick={() => {
      setTodos([...Todos, { id: Todos.length + 1, title: title}]);
    }}>추가하기</button>
    </div>
  </div>
  {/* 제목, 내용, 추가하기 타이틀 부분 */}
  <div>
    <h2>Working..🔥</h2>
    <div className="todos1-container">
      {Todos.map((todo1) => (
        <div className="todo1" key={todo1.id}>
          {todo1.title}
          <button className="delete-button button">삭제하기</button>
          <button className="complete-button button">완료</button>
        </div>
        
      ))}
      
    </div>
  </div>
  <div>  
    <h2>Done..!🎉</h2>
    <div className="todos2-container">
      {Todos.map((todo1) => (
        <div className="todo1" key={todo1.id}>
          {todo1.title}
          <button className="delete-button button">삭제하기</button>
          <button className="complete-button button">취소</button>
        </div>
      ))}
    </div>
  </div>  
</div>
);
}

export default App;
