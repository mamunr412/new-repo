import {
  FullscreenOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Menu, MenuProps, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import ProfileSection from "./ProfileSection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const btnStyle = {
  padding: ".3rem",
  backgroundColor: "white",
  color: "black",
  border: "1px solid gray",
  borderRadius: "5px",
  cursor: "pointer",
  height: "30px",
};
const NavBar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();

  const handleFullscreenToggle = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  const enterFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    }

    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }

    setIsFullscreen(false);
  };
  const menuItems: MenuItem[] = [
    getItem(
      <Button
        icon={<FullscreenOutlined />}
        type='dashed'
        onClick={handleFullscreenToggle}
        // onClick={() => document.documentElement.requestFullscreen()}
      />,
      "1"
    ),

    getItem(<ProfileSection />, "/setting/profile"),
  ];

  return (
    <Header style={{ backgroundColor: "white" }}>
      <Row justify='end' align='middle'>
        <div>
          <span
            style={{ ...btnStyle, marginRight: ".5rem" }}
            onClick={() => navigate(-1)}
          >
            <LeftOutlined />
          </span>
          <span
            style={{ ...btnStyle, marginLeft: ".5rem" }}
            onClick={() => navigate(1)}
          >
            <RightOutlined />
          </span>
        </div>
        <div style={{ marginLeft: "auto", order: 2 }}>
          <Menu
            style={{ width: "100%" }}
            theme='light'
            mode='horizontal'
            items={menuItems}
          />
        </div>
      </Row>
    </Header>
  );
};

export default NavBar;
