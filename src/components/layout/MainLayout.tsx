import React from "react";
import { Flex, Layout } from "antd";
import { UiHeader } from "./nav-bar/UiHeader";

const { Header, Footer, Content } = Layout;
// TODO AJUSTAR RESPONSIVIDADE DAS MARGENS E DISPOSIÇÃO DOS CARDS - PRECISA ? Ver no README
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  height: 64,
  paddingInline: 0,
  backgroundColor: "var(--bg-color)",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  padding: "2em",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#EFEFEE",
  border: "1px solid red",
};

const layoutStyle = {
  overflow: "hidden",
  margin: "0 40px",
  width: "100%",
  maxWidth: "100%",
};

// TODO: ElementType ou FC ?
const MainLayout: React.ElementType<{ children: React.ReactNode }> = ({ children }) => (
  <Flex gap="middle" style={{ margin: "2em" }} wrap>
    <div style={{ width: "100%", position: "sticky", top: 32 }}>
      <Header style={headerStyle}>
        <UiHeader />
      </Header>
    </div>
    <Layout style={layoutStyle}>
      <Layout>
        <Content style={contentStyle}>
          {children}
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>

    {/* With SIDER LAYOUT */}
    {/* <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Content style={contentStyle}>Content</Content>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout> */}
  </Flex>
);

export default MainLayout;
