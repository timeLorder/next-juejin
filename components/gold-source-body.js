import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { loadMoreGoldList } from "../store.js";
import LoadingSpinner from "./loading-spinner.js";
const iScroll = () => import("iscroll/build/iscroll-probe")

function timeAgo(time) {
  const targetTime = +new Date(time)
  const between = (Date.now() - targetTime) / 1000
  if (between < 3600) {
    return ~~(between / 60) + '分钟前'
  } else if (between < 86400) {
    return ~~(between / 3600) + '小时前'
  } else {
    return ~~(between / 86400) + '天前'
  }
}

const ListItem = (props) => {
  const { url, collectionCount: upNum, title, date: {iso}, user: {username, url: userhost} } = props.item
  const utctime = new Date(iso).toUTCString()
  const time = timeAgo(iso)
  return (
    <li className="item">
      <a className="item-content" href={url+'?utm_source=gold_browser_extension'} target="_blank">
        <div className="badge" title={upNum===0?'还没有人喜欢':`至少已有${upNum}人喜欢`}>
          <div className="icon-caret-up">
            <Icon type="caret-up" />
          </div>
          <div className="badge-text">{upNum}</div>
        </div>
        <div className="entry-info">
          <div className="entry-info-title" title={title} >{title}</div>
          <div className="meta">
            <div className="meta-list">
              <div className="meta-item">
                <span title={utctime}>{time}</span>
              </div>
              <div className="meta-item">
                <span title={'访问 '+username+' 的主页'} onClick={()=>window.open(userhost+'?utm_source=gold_browser_extension')}>{username}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <style jsx>{`
        .item {
          cursor: pointer;
        }
        .item-content {
          display: flex;
          padding: .4rem 1.25rem .4rem .4rem;
          margin-bottom: .8rem;
          background-color: #fff;
          border-radius: 2px;
        }
        .badge {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          flex-shrink: 0;
          width: 2.834rem;
          height: 3.667rem;
          border-radius: 2px;
          transition: all .2s ease;
          color: #e8f1ff;
          background-color: #007fff;
          overflow: hidden;
        }
        .item:hover .badge {
          color: #007fff;
          background-color: #e8f1ff;
        }
        .icon-caret-up {
          margin-bottom: .3rem;
          font-size: 1.3rem;
        }
        .badge-text {
          font-family: "Helvetica Neue";
          font-size: 1rem;
          font-weight: 700;
        }
        .entry-info {
          flex-grow: 1;
          position: relative;
          margin-left: 1.2rem;
          height: 3.667rem;
          min-width: 0;
          cursor: pointer;
        }
        .entry-info-title {
          max-width: 100%;
          font-size: 1.25rem;
          line-height: 1.8;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .entry-info .meta {
          display: flex;
          font-size: 1rem;
          line-height: 1;
          color: #c2c5cd;
          white-space: nowrap;
          opacity: .8;
        }
        .entry-info .meta-list {
          display: flex;
          flex: 1 1 auto;
          padding: 0;
          min-width: 0;
          overflow: hidden;
        }
        .entry-info .meta-item {
          flex: 0 0 auto;
          margin-right: 1rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      `}</style>
    </li>
  )
}


class goldSourceBody extends Component {
  componentDidMount() {
    const options = {
      // 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
      preventDefault: false,
      // 支持鼠标事件
      mouseWheel: true,
      // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
      probeType: 2,
      // 展示滚动条
      scrollbars: true,
      // 允许用户操作滚动条
      interactiveScrollbars: true
    };
    iScroll().then(res=>{
      const iscroll = res.default
      this.iScrollInstance = new iscroll('.entry-list', options);
      this.iScrollInstance.on('scrollEnd', this.onScrollEnd);
    })
  }

  onScrollEnd = () => {
    const { filled, goldType, goldShowType, goldOffset, dispatch } = this.props
    // 滑动结束后，停在加载区域
    if (!filled && this.iScrollInstance.y <= this.iScrollInstance.maxScrollY + 300) {
      loadMoreGoldList({ goldType, goldShowType, goldOffset })(dispatch)
    }
  }

  componentDidUpdate() {
    // 列表发生了变更，调用iscroll的refresh重新计算滚动条信息
    this.iScrollInstance && this.iScrollInstance.refresh();
  }

  render() {
    const { goldList: list, filled } = this.props
    return (
      <div className="entry-list">
        <ul className={filled ? 'list filled' : 'list'}>
          {
            list.map(item=>{
              return <ListItem key={item.id} item={item} />
            })
          }
          <div className="entry-list-loading">
            <LoadingSpinner/>
          </div>
        </ul>
        <style jsx>{`
          .entry-list {
            flex: 1 1 auto;
            position: relative;
            overflow-y: hidden;
            padding-right: .8rem;
          }
          .entry-list .list {
            margin: 0;
            padding: 0;
            list-style: none;
            padding-bottom: 6rem;
          }
          .entry-list-loading {
            display: ${filled ? 'none' : 'block'};
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

export default connect()(goldSourceBody)