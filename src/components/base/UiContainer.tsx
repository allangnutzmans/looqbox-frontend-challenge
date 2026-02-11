const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0",
    width: "100%"
};

export const UiContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={containerStyle}>
            {children}
        </div>
    );
};