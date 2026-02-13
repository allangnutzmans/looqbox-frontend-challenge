import { Flex } from 'antd';
import { UiSearchBar } from './base/UiSearchBar';
import { useNavigate } from 'react-router';

const searchBarStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '500px',
};

export const PokeSearchBar = () => {
    const navigate = useNavigate();
    return (
        <div style={{ padding: '2em 0 1em 0' }}>
            <Flex justify="center">
                <UiSearchBar
                    style={searchBarStyle}
                    onSearch={(value) =>
                        navigate(value ? `/search/${value.toLowerCase()}` : '/')
                    }
                />
            </Flex>
        </div>
    );
};
