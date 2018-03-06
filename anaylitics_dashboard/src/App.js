import React, { Component } from 'react';
import './App.css';

// components
import DataCharts from './Components/DataCharts';
import SocialMedia from './Components/SocialMedia';
import Widgets from './Components/Widgets';

export default class App extends Component {
  render() {
    return (

      <div className="App-b">
          <header className="main-header flex col-12 clearfix">
            <h2 className="main-logo">Your<span className="trademark">App&#8482;</span></h2>

            <div className="avitar">
              <a href="#"><span className="notification"><span className="notification-dot">&#8226;</span></span></a>
              <span className="bar"></span>
              <div className="avitar-pic"></div>
              <a href="#"><span className="avitar-name">Jack Diven</span></a>
            </div>
          </header>

        {/* <main className="main-body flex"> */}
          <nav className="main-side-nav clearfix">
          <ul className="side-nav">
            <li className="icons"><a href="#bammm" className="link"><span className='dashboard-icon'></span></a></li>
            <li className="icons"><a href="#" className="link"><span className='members-icon'></span></a></li>
            <li className="icons"><a href="#" className="link"><span className='visits-icon'></span></a></li>
            <li className="icons"><a href="#" className="link"><span className='settings-icon'></span></a></li>
          </ul>
        </nav>
      {/* </main> */}

      <div className="row">
        <div className=" flex">
          <div className="flex justify-center col-2 border border-delete">
            <h3 className="text-margin">Dashbord</h3>
          </div>
          <div className="col-10 flex search ">
            <input id="search" className="search-box search-icon" name="searchbox" placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="flex spaced popup-alert">
          <div className="grouped">
            <span className="alert">Alert </span>
            <span className="alert-info">Null this is a alert telling you about the alert and how this means nothing at all. But to have you was your time reading it :)</span>
          </div>
          <span className="close-btn">x</span>
        </div>
      </div>


      <DataCharts />
      <SocialMedia />
      <Widgets />

      </div>
    );
  }
}
