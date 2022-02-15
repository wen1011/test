/* eslint-disable jsx-a11y/heading-has-content */
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// 初始化默認狀態的構造函數
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}
  // 我們插入了方法 callAPI() ，它將從API獲取數據，並存儲在 this.state.apiResponse 上。
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse:res }));
  }

  // 插入了一個名為 componentDidMount() 的 react 生命週期方法，該方法將在組件安裝後執行 callAPI() 方法。
  componentDidMount(){
    this.callAPI();
  }
  render(){
     return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-logo' alt="logo"></h1>
        </header>
        {/* 我使用 <p> 標籤在我們的客户端頁面上顯示一個段落，其中包含我們從 API 獲取的文本。 */}
        <p className="App-intro">;{this.state.apiResponse}</p>
       
    
    </div>
  );
  }
 
}

export default App;
