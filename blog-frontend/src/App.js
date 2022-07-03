import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    var data = "specialComment";
    let post = '강남 우동 맛집';
    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
                <h4 style={{ padding: '0px 20px' }}>{post}</h4>
            </div>
        </div>
    );
}

export default App;
