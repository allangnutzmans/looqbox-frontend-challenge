import React, { useState } from 'react';

interface PokemonImageProps {
    id: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

const PokemonImage: React.FC<PokemonImageProps> = ({
    id,
    alt,
    width = 200,
    height = 200,
    className,
    style,
}) => {
    const officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const defaultSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const questionMark = '/img-question.png';

    const [src, setSrc] = useState(officialArtwork);
    const [fallbackStep, setFallbackStep] = useState(0);

    const handleError = () => {
        if (fallbackStep === 0) {
            setSrc(defaultSprite);
            setFallbackStep(1);
        } else if (fallbackStep === 1) {
            setSrc(questionMark);
            setFallbackStep(2);
        }
    };

    return (
        <img
            src={src}
            alt={alt}
            onError={handleError}
            width={width}
            height={height}
            className={className}
            style={style}
        />
    );
};

export default PokemonImage;
