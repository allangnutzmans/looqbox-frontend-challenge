const MAX_STAT = 255;
// Some pokemons have stats higher than 255, so normalize with percentage
export const calcPokeStatsPercentage = (stat: number) =>
    Math.round((stat / MAX_STAT) * 100);

//Gets height in meters
export const getPokeHeight = (height: number) => height / 10;

//Gets weight in kilograms
export const getPokeWeight = (weight: number) => weight / 10;
