import React from 'react'
import { Popover, Tooltip } from 'antd';
import HeaderSelector from "./header-selector.js";

const downloadQrcode = (
  <a href="https://landing.juejin.im/app-download?utm_source=extension&amp;utm_medium=qrcode&amp;utm_campaign=app1704" target="_blank">
    <img src="/qrcode.png" className="qrcode" width="100" height="100"/>
  </a>
);

const NavHeader = () => {
  return (
    <div className="navbar">
      <div className="logo"/>
      <div className="search-input">
        <input type="search" placeholder="掘金搜索，如：Java，阿里巴巴，前端面试"/>
      </div>
      <Popover content="todo" placement="bottomLeft">
        <div className="book-banner">
          <a href="https://juejin.im/books" target="_blank" className="title">掘金小册</a>
        </div>
      </Popover>
      <Tooltip title={downloadQrcode} placement="bottom" trigger="click" overlayClassName="download-qrcode">
        <div className="download-button">
          <div className="title">下载掘金 App</div>
        </div>
      </Tooltip>
      <HeaderSelector/>
      <div className="app-menu">
        <div className="app-menu-more"/>
      </div>
      <style jsx>{`
        .navbar {
          position: relative;
          padding: 0 2.5rem 0 1.8rem;
          height: 4.5rem;
          background-color: #fff;
          z-index: 500;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          cursor: default;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .logo {
          display: block;
          width: 5rem;
          height: 3rem;
          cursor: pointer;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url("/logo.svg")
        }
        .search-input {
          flex: 1 0 auto;
          margin: 0 2.2rem 0 1rem;
          height: 100%;
          padding: 1rem 0;
        }
        .search-input input {
          width: 50%;
          font-size: 1rem;
          line-height: 1.5;
          padding: .5rem;
          border: 1px solid #e6edf4;
          border-radius: 2px;
          background-color: #f1f5fa;
        }
        .search-input input:focus {
          outline: none;
          border-color: #007fff;
          background-color: #fff;
        }
        .book-banner, .download-button {
          position: relative;
          flex: 0 0 1.66667rem;
          margin: 0 2.2rem 0 0;
          height: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
        }
        .book-banner .title, .download-button .title {
          position: relative;
          padding-left: 20px;
          opacity: .8;
          font-size: 1.25rem;
          color: #007fff;
          white-space: nowrap;
        }
        .book-banner .title:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -11px;
          width: 16px;
          height: 22px;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDE2IDIxIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAyN0VGRiIgZD0iTTIgMWgxMmExIDEgMCAwIDEgMSAxdjE3YTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNOC44NCAxdjdsMi4wMjYtMS41NDVMMTIuODkgOFYxeiIvPgogICAgPC9nPgo8L3N2Zz4K);
        }
        .download-button .title:before {
          content: "";
          position: absolute;
          margin: -11px .5rem 0 0;
          top: 50%;
          left: 0;
          width: 1rem;
          height: 1.83333rem;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDEzIDIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjEzIiBoZWlnaHQ9IjIyIiBmaWxsPSIjMDA3RkZGIiByeD0iMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQuNSIgY3k9IjEuNSIgcj0iMSIgZmlsbD0iI0ZGRiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYuNSIgY3k9IjIwIiByPSIxIiBmaWxsPSIjRkZGIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjMiIGhlaWdodD0iMSIgeD0iNiIgeT0iMSIgZmlsbD0iI0ZGRiIgcng9Ii41Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEgM2gxMXYxNUgxeiIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjEiIHg9IjMuNSIgeT0iOS41IiBmaWxsPSIjMDA3RkZGIiByeD0iLjUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDYuNSAxMCkiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxIiB4PSIzLjUiIHk9IjEzIiBmaWxsPSIjMDA3RkZGIiByeD0iLjUiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgNi41IDEzLjUpIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMSIgeD0iMy40MTUiIHk9IjEwLjkwOCIgZmlsbD0iIzAwN0ZGRiIgcng9Ii41IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA1LjQxNSAxMS40MDgpIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMSIgeD0iNS42NjQiIHk9IjEwLjg1OSIgZmlsbD0iIzAwN0ZGRiIgcng9Ii41IiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgNy42NjQgMTEuMzU5KSIvPgogICAgPC9nPgo8L3N2Zz4K);
        }
        .qrcode {
          margin: 0 auto;
          width: 8.33333rem;
        }
        .app-menu-more {
          width: 1.66667rem;
          height: 1.66667rem;
          opacity: .8;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url("/more.svg");
        }
      `}</style>
    </div>
  )
}

export default NavHeader