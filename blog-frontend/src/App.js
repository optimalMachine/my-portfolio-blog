/*eslint-disable*/
import './App.css';
import { useState } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import Year from "react-live-clock";
import Month from "react-live-clock";


function App() {

    let [title, setTitle]= useState(['남자 코트 추천','여자 코트 추천','강남 우동 맛집']);
    let [titleNum, setTitleNum] = useState(0);
    let [likeit, setLikeit] = useState([0,0,0]);
    let [modalOn,setModalOn] = useState('false');
    let [newWrite, setNewWrite] = useState('');

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><span><i class="bi bi-mortarboard"></i> </span> My Project Blog</Navbar.Brand>
                </Container>
            </Navbar>
            {
                title.map((titles, i)=>{
                    return(
                        <div className="list" key={i}>
                            <h4 onClick={()=>{
                                setModalOn(!modalOn);
                                setTitleNum(i);
                            }}>{titles} <span onClick={(event)=>{
                                event.stopPropagation();
                                let temp = [...likeit]
                                temp[i] = temp[i]+1
                                setLikeit(temp)
                            }}> <i class="bi bi-hand-thumbs-up-fill"></i></span>{likeit[i]}</h4>
                            <p>2월17일</p>
                            <button onClick={()=>{
                                let temp = [...title];
                                let numTemp = [...likeit];
                                temp.splice(i,1);
                                numTemp.splice(i,1);
                                setLikeit(numTemp);
                                setTitle(temp);
                            }}>삭제</button>
                        </div>
                    )}
                    )
            }

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
            { modalOn == true ? <ModalWindow titles={title} titleNum={titleNum}/> : null }
            <div className='input-information'>
                <input type="text" onChange={(e)=>{
                    setNewWrite(e.target.value);
                }}></input>
                <button onClick={()=>{
                    let temp = [...title];
                    let numTemp = [...likeit];
                    temp.push(newWrite);
                    numTemp.push(0);
                    setTitle(temp);
                    setLikeit(numTemp);
                }}>글쓰기</button>
            </div>
        </div>
    );
}

function ModalWindow(props){
    return(
        <div className="modal-window">
            <h4>{props.titles[props.titleNum]}</h4>
            <p>날짜:</p>
            <p>상세내용:</p>
        </div>
    );
}


export default App;
