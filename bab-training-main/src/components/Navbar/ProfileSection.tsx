import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuProps,
  Popover,
  Space,
  Typography,
} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthContext } from "../../app/Context/AuthContext";
import { AUTH_USER_FAILED } from "../../app/Api/Constant";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const ProfileSection = () => {
  const { dispatch, user } = useAuthContext();

  const handleLogout = () => {
    Cookies.remove("trainee_token");
    dispatch({
      type: AUTH_USER_FAILED,
    });
  };

  const menuItems: MenuItem[] = [
    getItem(<Link to='/profile'>Profile</Link>, "/profile", <UserOutlined />),
    getItem(
      <Button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={() => handleLogout()}
        icon={<LogoutOutlined />}
      >
        Logout
      </Button>,
      "1"
    ),
  ];

  return (
    <Popover content={<Menu items={menuItems} defaultChecked={true} />}>
      <Space>
        <Avatar
          shape='circle'
          size={"large"}
          style={{
            color: "white",
            backgroundColor: "#4682B4",
            border: `2px solid #003151`,
            fontSize: "16px",
          }}
        ></Avatar>
        <Typography.Text strong>{user.name}</Typography.Text>
      </Space>
    </Popover>
  );
};

export default ProfileSection;
