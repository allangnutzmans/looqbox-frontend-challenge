import { UiSearchBar } from '../components/base/UiSearchBar';
import { Flex, Button } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { PokeDetails } from '../components/PokeDetails';
import { IconArrowLeft } from '@tabler/icons-react';

const searchBarStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '500px',
};

export const PokeSearchView = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <Flex vertical style={{ width: '100%', height: '100%' }}>
            <div style={{ padding: '2em 0 1em 0', flexShrink: 0 }}>
                <Flex justify="center" align="center" gap="middle">
                    <Button
                        type="text"
                        icon={<IconArrowLeft size={24} />}
                        onClick={() => navigate('/')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    />
                    <UiSearchBar
                        style={searchBarStyle}
                        defaultValue={id}
                        onSearch={(value) =>
                            navigate(
                                value ? `/search/${value.toLowerCase()}` : '/',
                            )
                        }
                    />
                </Flex>
            </div>

            <Flex
                justify="center"
                align="center"
                style={{ flex: 1, height: '100%', overflow: 'hidden' }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: '550px',
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <PokeDetails />
                </div>
            </Flex>
        </Flex>
    );
};
