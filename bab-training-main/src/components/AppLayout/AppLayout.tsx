import React, { useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet } from "react-router-dom";
import babLogo from "../../assets/bab-logo.png";
import { menuItems } from "./AppLayoutData";
import NavBar from "../Navbar/Navbar";
const { Content } = Layout;
const AppLayout: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [currentSelection, setCurrentSelection] = useState<string>("");
  const handleClick: MenuProps["onClick"] = (e: any) => {
    setCurrentSelection(e.key);
  };

  const [openKeys, setOpenKeys] = useState<Array<string>>([]);
  const rootSubmenuKeys = menuItems.map((item: any) => item?.key);
  const onOpenChange: MenuProps["onOpenChange"] = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleSidebarCollapse = (collapsed: boolean) => {
    setCollapse(collapsed);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "start",
        width: "100%",
      }}
    >
      <Sider
        theme='light'
        collapsible
        breakpoint='sm'
        onCollapse={handleSidebarCollapse}
        style={{
          minHeight: "100%",
          width: "85%",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Link to='/' style={{ display: "flex", justifyContent: "center" }}>
          <img
            width={collapse ? 80 : 130}
            src={babLogo}
            alt='bab logo'
            style={{
              textAlign: "center",
              padding: "0.5rem",
              animation: "outAnimation 250ms ease-in",
              animationFillMode: "forwards",
            }}
          />
        </Link>
        <Menu
          theme='light'
          mode='inline'
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          defaultSelectedKeys={["/"]}
          items={menuItems}
          selectedKeys={[currentSelection]}
          onClick={handleClick}
        />
      </Sider>
      <Layout style={{ margin: "0 16px", width: "100%" }}>
        <NavBar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
