import React from "react";
import { Layout } from "antd";
import { UiHeader } from "./nav-bar/UiHeader";
import { UiContainer } from "../base/UiContainer";
import PerfectScrollbar from 'react-perfect-scrollbar'

const { Header, Footer, Content } = Layout;

// TODO AJUSTAR RESPONSIVIDADE DAS MARGENS E DISPOSIÇÃO DOS CARDS - PRECISA ? Ver no README
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  height: 64,
  paddingInline: 0,
  padding: "1em 0",
  backgroundColor: "var(--bg-color)",
  zIndex: 10,
};

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  padding: "1em",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  bottom: 0,
};

// TODO: ElementType ou FC ?
const MainLayout: React.ElementType<{ children: React.ReactNode }> = ({ children }) => (
  <Layout style={{ height: "100vh" }}>
    <Header style={headerStyle}>
      <UiContainer>
        <UiHeader />
      </UiContainer>
    </Header>
    <Layout>
      <PerfectScrollbar>
        <Content style={contentStyle}>
          <UiContainer>
            {children}
          </UiContainer>
        </Content>
      </PerfectScrollbar>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Layout>
);

export default MainLayout;
