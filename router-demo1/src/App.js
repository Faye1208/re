import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';
import './App.css';

// 使用装饰器的写法改写connect
@connect(
    state => ({ num: state }),
    { addGun, removeGun, addGunAsync }
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>当前枪支数为{this.props.num}</h3>
        <button onClick={this.props.addGun}>加枪支</button>
        <button onClick={this.props.removeGun}>减枪支</button>
        <button onClick={this.props.addGunAsync}>延迟添加枪支</button>
      </div>
    );
  }
}

export default App;
