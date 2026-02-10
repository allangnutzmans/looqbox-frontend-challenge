import { Input } from "antd";
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
export const UiSearchBar = (props: SearchProps) => {
    return (
        <Search placeholder="Search your Pokémon!" {...props} />
    );
};