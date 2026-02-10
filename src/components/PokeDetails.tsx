import { type Pokemon } from "../api/MOCKs";

export const PokeDetails = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <ul>
                {pokemon.types.map((type) => (
                    <li key={type}>{type}</li>
                ))}
            </ul>
        </div>
    );
};