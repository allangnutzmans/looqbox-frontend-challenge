import React from "react";
import { Layout } from "antd";
import { UiHeader } from "./nav-bar/UiHeader";
import { UiContainer } from "../base/UiContainer";
import PerfectScrollbar from 'react-perfect-scrollbar'

const { Header, Content } = Layout;

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
  padding: "1em",
};

const backgroundStyle: React.CSSProperties = {
  minHeight: "100vh",
  backgroundImage: "url('/poke-background.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Layout style={backgroundStyle}>
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
    </Layout>
  </Layout>
);

export default MainLayout;
