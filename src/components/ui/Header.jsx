import React from "react";
// styled-components에서 styled 라는 키워드를 import 합니다.
import styled from "styled-components";


function Header () {
    return (
        <StHeader>
            <div>My Todo List</div>
            <div>React</div>
        </StHeader>
    
    
    );
}

export default Header;



const StHeader = styled.div`
    border: 1px solid #ddd;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
 `;