/*eslint-disable*/
import './App.css';
import { useState } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';


function App() {

    let [title, setTitle]= useState(['남자 코트 추천','여자 코트 추천','강남 우동 맛집']);
    
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><span><i class="bi bi-mortarboard"></i> </span> My Project Blog</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="list">
                <h4>남자 코트 추천</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>여자 코트 추천</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>강남 우동 맛집</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}


export default App;
