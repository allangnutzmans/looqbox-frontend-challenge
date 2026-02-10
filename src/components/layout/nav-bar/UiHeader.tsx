import { Flex, Tabs, type TabsProps } from "antd";
import { UiSheet } from "../../base/UiSheet";
import HomeIcon from "../../icons/HomeIcon";
import PokeballIcon from "../../icons/PokeballIcon";
import { router } from "../../../router";

// TODO: UNDERSTAND THIS TYPE
type NavigationItem = NonNullable<TabsProps['items']>[number] & { path: string };

export const UiHeader = () => {
    const items: NavigationItem[] = [
        {
            label: "Pokedex",
            path: "/",
            key: "1",
            icon: <HomeIcon />
        },
        {
            label: "Stats",
            path: "/stats",
            key: "2",
            icon: <PokeballIcon />

        },
    ];

    const handleTabChange = (key: string) => {
        const item = items.find(i => i.key === key);
        if (item?.path) {
            router.navigate(item.path);
        }
    };

    return (
        <Flex justify="center">
            <UiSheet
                variant="outline"
                rounded="lg"
                elevated={true}
                style={{
                    padding: "0rem 1rem 0 1rem",
                    minWidth: "500px",
                }}
            >
                <Tabs
                    items={items}
                    onChange={handleTabChange}
                    centered
                    size="large"
                    style={{
                        /* This removes the tab's ANTD default horizontal margin */
                        "--ant-tabs-horizontal-margin": "0 0 0 0",
                    } as React.CSSProperties}
                />
            </UiSheet>
        </Flex>
    );
};