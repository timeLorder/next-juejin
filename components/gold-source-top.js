import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from 'antd'
import { reSearchGoldList } from "../store.js";

const { Option } = Select
const options = [
  {label: "首页", value: "all" },
  {label: "前端", value: "frontend" },
  {label: "后端", value: "backend" },
  {label: "Android", value: "android" },
  {label: "iOS", value: "ios" },
]

class goldSourceTop extends Component {
  handleTypeChange = (val) => {
    const { goldShowType, dispatch } = this.props
    reSearchGoldList({goldType: val, goldShowType})(dispatch)
  }
  chooseHeatType = () => {
    const { goldType, dispatch } = this.props
    reSearchGoldList({goldType, goldShowType: 'heat'})(dispatch)
  }
  chooseTimeType = () => {
    const { goldType, dispatch } = this.props
    reSearchGoldList({goldType, goldShowType: 'time'})(dispatch)
  }
  render() {
    const { goldShowType } = this.props
    return (
      <div className="source-navbar">
        <div className="source-selector">
          <img className="source-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgWDcgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iOC4zODU3bW0iIGhlaWdodD0iOC4xOTIzbW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIgp2aWV3Qm94PSIwIDAgNTA5IDQ5NyIKIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIDwhW0NEQVRBWwogICAgLmZpbDAge2ZpbGw6IzAwNkNGRn0KICAgIC5maWwxIHtmaWxsOndoaXRlfQogICBdXT4KICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IuWbvuWxgl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxyZWN0IGNsYXNzPSJmaWwwIiB3aWR0aD0iNTA5IiBoZWlnaHQ9IjQ5NyIvPgogIDxwYXRoIGlkPSJGaWxsLTEtQ29weSIgY2xhc3M9ImZpbDEiIGQ9Ik0yODUgMTM4bC0zMSAtMjQgLTMzIDI1IC0yIDIgMzUgMjcgMzQgLTI3IC0zIC0zem0xMTkgOTVsLTE1MCAxMTYgLTE1MSAtMTE2IC0yMiAxNyAxNzMgMTM0IDE3MyAtMTM0IC0yMyAtMTd6bS0xNTAgOWwtODIgLTYzIC0yMyAxNyAxMDUgODEgMTA0IC04MSAtMjIgLTE3IC04MiA2M3oiLz4KIDwvZz4KPC9zdmc+Cg==" />
          <div className="source-title" style={{color: "rgb(4, 74, 171)"}}>掘金</div>
        </div>
        <div className="category-box">
          <Select defaultValue="frontend" style={{ width: 96 }} onChange={this.handleTypeChange}>
            {options.map(item=>{
              return <Option value={item.value} key={item.value}>{item.label}</Option>
            })}
          </Select>
        </div>
        <div className="order-selector">
          <div className={"hottest"+(goldShowType==='heat'?' active':'')} onClick={this.chooseHeatType}>热门</div>
          <div className={"latest"+(goldShowType==='time'?' active':'')} onClick={this.chooseTimeType}>最新</div>
        </div>
        <style jsx>{`
          .source-navbar {
            display: flex;
            align-items: center;
            min-height: 3.5rem;
            background-color: #fff;
            border-radius: 2px;
            z-index: 250;
            margin: 0 .8rem 1.2rem 0;
          }
          .source-selector {
            position: relative;
            height: 100%;
            color: #646c7b;
            font-size: 1.35rem;
            font-family: Verdana,Geneva,"Microsoft YaHei","Microsoft JhengHei","Helvetica Neue",sans-serif;
            display: flex;
            align-items: center;
          }
          .source-icon {
            width: 2.833rem;
            height: 2.833rem;
            border-radius: 2px;
            margin: 0 1rem 0 .4rem;
            border: 0;
          }
          .source-title {
            margin: 0 1rem 0 0;
            opacity: 1;
          }
          .category-box {
            flex-grow: 1;
          }
          .hottest, .latest {
            display: inline-block;
            margin: 0 .1rem;
            width: 3.6rem;
            height: 3.5rem;
            font-size: 1.25rem;
            text-align: center;
            line-height: 3.5rem;
            color: #646c7b;
            opacity: .3;
            cursor: pointer;
          }
          .hottest.active, .latest.active {
            opacity: .8;
          }
          .hottest:hover, .latest:hover {
            opacity: 1;
          }
          .order-selector {
            margin-right: .8rem;
          }
        `}</style>
      </div>
    )
  }
}

export default connect()(goldSourceTop)