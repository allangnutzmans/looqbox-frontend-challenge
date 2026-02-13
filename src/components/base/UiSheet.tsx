export const UiSheet = ({
    children,
    variant,
    rounded,
    elevated,
    style,
}: {
    children?: React.ReactNode;
    variant?: 'default' | 'outline' | 'ghost' | 'soft';
    rounded?: 'sm' | 'md' | 'lg';
    elevated?: boolean;
    style?: React.CSSProperties;
}) => {
    const roundedStyle: Record<string, React.CSSProperties> = {
        sm: { borderRadius: '0.3rem' },
        md: { borderRadius: '0.6rem' },
        lg: { borderRadius: '0.9rem' },
    };

    const variantClass: Record<string, React.CSSProperties> = {
        default: { backgroundColor: 'white' },
        outline: { borderColor: '#EFEFEE', borderWidth: '1px' },
        ghost: { backgroundColor: 'transparent' },
        soft: { backgroundColor: '#EFEFEE' },
    };

    const elevatedClass: Record<string, React.CSSProperties> = {
        true: {
            boxShadow:
                'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
        },
        false: { boxShadow: 'none' },
    };

    const sheetStyle: React.CSSProperties = {
        ...roundedStyle[rounded || 'md'],
        ...variantClass[variant || 'default'],
        ...(elevated ? elevatedClass[String(elevated)] : {}),
        ...style,
    };

    return <div style={sheetStyle}>{children}</div>;
};
