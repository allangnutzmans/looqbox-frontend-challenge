import { Tag, type TagProps } from 'antd';

const UiTag = ({
    name,
    color,
    props,
}: {
    name: string;
    color?: string;
    props?: TagProps;
}) => {
    return (
        <Tag
            variant="solid"
            style={{
                fontWeight: 'bold',
                fontSize: '1em',
                textTransform: 'uppercase',
            }}
            color={color}
            {...props}
        >
            {name}
        </Tag>
    );
};

export default UiTag;
