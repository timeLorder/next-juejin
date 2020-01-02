import React from "react";
import NavHeader from "../components/nav-header.js";
import GoldSource from "../components/gold-source.js";
import OtherSource from "../components/other-source.js";
import "../index.css";
import { connect } from 'react-redux'
import { init2List } from '../store'

class HomePage extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    await reduxStore.dispatch(init2List())
    return {}
  }

  render() {
    return (
      <div id="app" className="app-transition">
        <div className="layout source-layout">
          <NavHeader />
          <div className="main-area">
            <GoldSource/>
            <OtherSource/>
          </div>
        </div>
        <style jsx>{`
          .app-transition {
            transition: opacity .15s linear;
            opacity: 1;
          }
          .layout {
            display: flex;
            flex-direction: column;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #eceff1;
            overflow: hidden;
          }
          .main-area {
            flex: 1 1 auto;
            display: flex;
            position: relative;
            margin: 1.8rem 1.2rem 0 1.8rem;
            overflow: hidden;
          }
      `}</style>
      </div>
    )
  }
}

export default connect()(HomePage)