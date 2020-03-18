import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

const menusArr = [
  { iconName: "android", name: "Android" },
  { iconName: "frontend", name: "前端" },
  { iconName: "product", name: "产品" },
  { iconName: "design", name: "设计" },
  { iconName: "ios", name: "iOS" },
  { iconName: "backend", name: "后端" }
];

const menu = (
  <Menu>
    {menusArr.map(item => {
      return (
        <Menu.Item key={item.iconName}>
          <div style={{ width: "16rem", lineHeight: "27px" }}>
            <img className="channel-icon" src={"/" + item.iconName + ".svg"} />
            <span className="channel-title">{item.name}</span>
            <style jsx>{`
              .channel-icon {
                margin: 0 1rem;
                width: 2.25rem;
                height: 2.25rem;
              }
              .channel-title {
                font-size: 15px;
              }
            `}</style>
          </div>
        </Menu.Item>
      );
    })}
  </Menu>
);

class HeaderSelector extends Component {
  constructor(props) {
    super(props); //test develop branch
  }
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className="channel-selector">
          <div className="curr">
            <img src="/frontend.svg" className="icon" />
            <div className="title">前端</div>
            <Icon type="down" />
          </div>
          <style jsx>{`
            .channel-selector .curr {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: row;
              justify-content: flex-end;
              color: #767e8d;
              cursor: pointer;
              opacity: 0.8;
              margin: 0 2rem 0 0;
            }
            .channel-selector .curr .icon {
              margin-left: 1rem;
              width: 2.25rem;
              height: 2.25rem;
            }
            .channel-selector .curr .title {
              margin: 0 1rem;
              font-size: 1.25rem;
            }
          `}</style>
        </div>
      </Dropdown>
    );
  }
}

export default HeaderSelector;
