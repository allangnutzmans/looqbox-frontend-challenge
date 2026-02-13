const containerStyle: React.CSSProperties = {
    maxWidth: '1250px',
    margin: '0 auto',
    padding: '0',
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
};

export const UiContainer = ({ children }: { children: React.ReactNode }) => {
    return <div style={containerStyle}>{children}</div>;
};
