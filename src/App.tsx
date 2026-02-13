import './App.css';
import 'antd/dist/antd.css';
import UiLayout from './components/layout/MainLayout';
import { ConfigProvider } from 'antd';
import { THEME } from './components/theme';
import { Outlet } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <ConfigProvider theme={THEME}>
                <UiLayout>
                    <Outlet />
                </UiLayout>
            </ConfigProvider>
        </Provider>
    );
}

export default App;
