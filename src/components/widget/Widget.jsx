import React from "react";
import "./widget.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "view all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon-widget"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)"
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "view all orders",
        icon: <ShoppingCartOutlinedIcon className="icon-widget" 
        style={{
          color: "goldenrod",
          backgroundColor: "rgba(218, 165, 32, 0.2)"
        }}
        />,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "view net orders",
        icon: <MonetizationOnOutlinedIcon className="icon-widget"
        style={{
          color: "green",
          backgroundColor: "rgba(0, 128, 0, 0.2)"
        }}
        />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "view details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon-widget" 
        style={{
          color: "purple",
          backgroundColor: "rgba(128, 0, 128, 0.2)"
        }}
        />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left-widget">
        <span className="title-widget">{data.title}</span>
        <span className="counter-widget">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link-widget">{data.link}</span>
      </div>
      <div className="right-widget">
        <div className="percentage-widget positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
