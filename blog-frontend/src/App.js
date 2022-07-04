/*eslint-disable*/
import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    let [글제목,셋글제목] = useState(['남자 코트 추천','여자 코트 추천','우동 맛집 추천']);
    let [likeit, setLikeit] = useState([0,0,0]);
    let [modal,setModal] = useState(false);
    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
            </div>
           {
                글제목.map(function(a,i){
                    return(<div className="list" key={i}>
                        <h4 onClick={()=>{setModal(!modal)}}>{글제목[i]} 
                        <span onClick={()=>
                            {
                                var temp = [...likeit];
                                temp[i] = temp[i]+1;
                                setLikeit(temp);
                            }}><i class="bi bi-hand-thumbs-up-fill"></i></span>{likeit[i]}</h4>
                        <p>2월17일 발행</p>
            {/* 남자 코트 에서 여자 코트 변경 버튼 */}
            {/* <button onClick={()=>{
                let temp = [...글제목];
                temp[0] = '여자 코트 추천';
                셋글제목(temp);
            }}>change</button> */}
                    </div>
                    )
                })

            }    
    {/* 이름 순서 정렬 버튼 */}
    {/* <button onClick={()=>{
        var temp = [...글제목];
        temp.sort();
        setCounter(temp);

    }}>change</button> */}
            {
                modal == true ? <Modal colors={'orange'} title={글제목} /> : null
            }
        </div>
    );
}

function Modal(props){
    return(
        <div className = "modalComp" style={{background:props.colors}}>
            <h4>{props.title[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
