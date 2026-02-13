import React from "react";
import { Layout } from "antd";
import { UiHeader } from "./nav-bar/UiHeader";
import { UiContainer } from "../base/UiContainer";

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
  height: "100vh",
  backgroundImage: "url('/poke-background.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Layout style={backgroundStyle}>
    <Header style={headerStyle}>
      <UiContainer>
        <UiHeader />
      </UiContainer>
    </Header>
    <Layout style={{ background: "transparent", overflow: "hidden" }}>
      <Content style={{ ...contentStyle, display: "flex", flexDirection: "column" }}>
        <UiContainer>
          {children}
        </UiContainer>
      </Content>
    </Layout>
  </Layout>
);

export default MainLayout;
