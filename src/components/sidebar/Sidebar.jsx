import React from "react";
import "./sidebar.css";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">rahuladmin</span>
      </div>
      <hr /> {/* used for horizontal line */}
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <DashboardCustomizeOutlinedIcon className="icon"/>
            <span className="dashboard-span">Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span className="dashboard-span">Users</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className="icon"/>
            <span className="dashboard-span">Products</span>
          </li>
          <li>
            <ListAltOutlinedIcon className="icon"/>
            <span className="dashboard-span">Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon"/>
            <span className="dashboard-span">Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icon"/>
            <span className="dashboard-span">Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon"/>
            <span className="dashboard-span">Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className="icon"/>
            <span className="dashboard-span">System Health</span>
          </li>
          <li>
            <DescriptionOutlinedIcon className="icon"/>
            <span className="dashboard-span">Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"/>
            <span className="dashboard-span">Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span className="dashboard-span">Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span className="dashboard-span">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
