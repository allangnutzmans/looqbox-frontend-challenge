import type { ThemeConfig } from 'antd';

export const THEME: ThemeConfig = {
    token: {
        // Main colors
        colorPrimary: '#ff4d4f',
        colorInfo: '#ff4d4f',
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: '#ff4d4f',

        colorTextBase: '#1f2937',
        colorTextSecondary: '#6b7280',

        borderRadius: 12,
        colorBgLayout: 'transparent',
        // Focous
        controlOutline: 'rgba(255, 77, 79, 0.2)',
    },

    components: {
        Input: {
            hoverBorderColor: '#ff4d4f',
            activeBorderColor: '#ff4d4f',
            colorBgLayout: '#f6f8fb',
        },
        Card: {
            boxShadow:
                '0 8px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
            colorBgContainer: '#ffffffc4',
        },
    },
};
