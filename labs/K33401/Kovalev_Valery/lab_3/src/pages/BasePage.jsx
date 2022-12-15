import { Layout, Menu, Modal } from "antd";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  FormOutlined,
  HomeOutlined,
  LoginOutlined,
  PieChartOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const NavigateItems = [
  getItem("Main", "main", <HomeOutlined />),
  getItem("Search", "search", <SearchOutlined />)
  ];

const AuthItems = [
  getItem("Log In", "login", <LoginOutlined />, ),
  getItem("Register", "register", <FormOutlined />)
  ];


const BasePage = ({ children }) => {
  const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const menuOnClick = (e) => {
    if(e.key==="login"){
      setIsLoginModalOpen(true)
    }
  }

  return (
    <Layout className="min-h-screen">
      <Modal title="Login" open={isLoginModalOpen} onOk={()=>{setIsLoginModalOpen(false)}} onCancel={()=>{setIsLoginModalOpen(false)}}>

      </Modal>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu onClick={menuOnClick} theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={AuthItems} />
        <Menu theme="dark" defaultSelectedKeys={["main"]} mode="inline" items={NavigateItems} />


      </Sider>
      <Layout className="site-layout p-2">
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasePage;
