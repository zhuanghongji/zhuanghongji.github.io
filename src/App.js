import React, { Component } from 'react';
import avatar from './avatar.jpg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={avatar} className="App-logo" alt="logo" />
          <h1>庄宏基</h1>
          <h2>zhuanghongji</h2>
          <h3>Android - iOS - React Native</h3>
          <p>26岁 男 广州</p>
          <p>广东工业大学 本科 (2012-2016)</p>
          <p>zhuanghongji.com@gmail.com</p>
          <br />
          <a href="https://github.com/zhuanghongji">GitHub</a>
          <br />
          <a href="https://github.com/zhuanghongji/page">我的博文</a>
          <br />
          <a href="https://github.com/zhuanghongji/questions">自问自答</a>
        </header>
      </div>
    );
  }
}

export default App;
