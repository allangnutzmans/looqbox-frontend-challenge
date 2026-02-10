import "./App.css";
import "antd/dist/antd.css";
import UiLayout from "./components/layout/MainLayout";
import { ConfigProvider } from "antd";
import { THEME } from "./components/theme";
import { Outlet } from "react-router";

function App() {
  return (
    <ConfigProvider theme={THEME}>
      <UiLayout>
        <Outlet />
      </UiLayout>
    </ConfigProvider>
  );
}

export default App;