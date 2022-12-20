import { Layout, Menu} from "antd";
import React, { useState } from "react";
import {
  FormOutlined,
  HomeOutlined,
  LoginOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LoginModal from "../../components/modals/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import { useAuth } from "../../hooks/useAuth";

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

const LoggedNavigateItems = [
  getItem("Profile", "profile", <UserOutlined />),
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
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const menuOnClick = (e) => {
    switch (e.key) {
      case "login":
        setIsLoginModalOpen(true)
        break;
      case "register":
        setIsRegisterModalOpen(true)
        break;
      case "main":
        console.log(e.key)
        break;
      default:
        break;
    }
  }

  const { user, isAuth } = useAuth();


  return (
    <Layout className="min-h-screen">

      

      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen}/>
      <RegisterModal isRegisterModalOpen={isRegisterModalOpen} setIsRegisterModalOpen={setIsRegisterModalOpen}/>

      
    
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
      {isAuth ? 
      <>
      <Menu theme="dark" onClick={menuOnClick} defaultSelectedKeys={"main"} mode="inline" items={LoggedNavigateItems} />
      </>
      :
      <>
      <Menu selectable={false} onClick={menuOnClick} theme="dark" mode="inline" items={AuthItems} />
      <Menu theme="dark" onClick={menuOnClick} defaultSelectedKeys={"main"} mode="inline" items={NavigateItems} />
      </>}
        




      </Sider>
      <Layout className="site-layout p-2">
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasePage;
