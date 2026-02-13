import { Flex, Typography, theme } from "antd";
import PokeballIcon from "../../icons/PokeballIcon";

export const UiHeader = () => {
    const { token } = theme.useToken();

    return (
        <Flex justify="center">
            <Flex style={{
                padding: "0rem 1rem 0 1rem",
                minWidth: "500px",
                minHeight: "75px",
            }} justify="center" align="center">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography.Title level={2} style={{ margin: 0, color: token.colorText }}>
                        Pokédex
                        <PokeballIcon color={token.colorPrimary} style={{ marginLeft: "0.5em" }} />
                    </Typography.Title>
                </div>
            </Flex>
        </Flex>
    );
};