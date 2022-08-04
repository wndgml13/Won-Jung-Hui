import React from "react";

import styled from "styled-components";
import { useState } from "react";
import { addTodo } from "../../redux/modules/todos";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";



function Form () {
    const id = nextId();

    const [todo, setTodo] = useState({     // todos.js에서 단일 state를 가져오기
        id: 0,
        title: "",
        body: "",
        isDone: false,
    });

    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        
        const {name, value} = e.target;
        setTodo({...todo, [name]:value});   // [name] 은 변수라서 대괄호로 해줬고 title과 body값임. value는 인풋에 사용자가 입력하는값.
    };

    const onAddHandler = (e) => {
        e.preventDefault();
        // if (todo.title.trim() === "" || todo.body.trim() === "") return;
        dispatch(addTodo({...todo, id}));
    }
    

    return (
        <Staddform>
            <Stinputgroup>
            <Stformlabel>제목</Stformlabel>
                <Staddinput
                    type="text"
                    name="title"
                    value={todo.title}

                    onChange={onChangeHandler}>
                </Staddinput>
            <Stformlabel>내용</Stformlabel>
                <Staddinput
                    type="text"
                    name="body"
                    value={todo.body}
                    onChange={onChangeHandler}>
                </Staddinput>    
            </Stinputgroup>
            <Staddbutton onClick={
                onAddHandler
                
            }>추가하기</Staddbutton>
        </Staddform>
        
    )
}

export default Form;

const Staddform = styled.div`
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`;

const Stinputgroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Stformlabel = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

const Staddinput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const Staddbutton = styled.div`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;