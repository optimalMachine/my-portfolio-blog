/*eslint-disable*/
import './App.css';
import { useState } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';


function App() {

    let [title, setTitle]= useState(['남자 코트 추천','여자 코트 추천','강남 우동 맛집']);
    let [likeit, setLikeit] = useState(0);
    let [modalOn,setModalOn] = useState('false');

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><span><i class="bi bi-mortarboard"></i> </span> My Project Blog</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="list">
                <h4 onClick={()=>{
                    setModalOn(!modalOn);
                }}>{title[0]} <span onClick={(event)=>{
                    event.stopPropagation();
                    setLikeit(likeit+1);
                }}> <i class="bi bi-hand-thumbs-up-fill"></i></span>{likeit}</h4>
                <p>2월 17일 발행</p>
            </div>

            <div className="buttons">
                {/* 남자를 여자로 바꾸는 버튼 */}
                <div className="buttons-button-01">
                    <button onClick={()=>{
                        let temp = [...title];
                        temp[0] = '여자 코트 추천';
                        setTitle(temp);
                    }}>여자로 바꾸기</button>
                </div>
                {/* 타이틀 배열 정렬 버튼 */}
                <div className="buttons-button-02">
                    <button onClick={()=>{
                        let temp = [...title];
                        temp = temp.sort();
                        setTitle(temp);
                    }}>제목정렬버튼</button>
                </div>
            </div>
            { modalOn == true ? <ModalWindow /> : null }
        </div>
    );
}

function ModalWindow(){
    return(
        <div className="modal-window">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}


export default App;
