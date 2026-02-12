import { Flex, Card, Typography } from "antd";
import { useNavigate } from "react-router";
import { useGetPokedexListQuery } from "../api/client";
import PokemonImage from "./PokemonImage";

interface PokeCardGridProps {
    page: number;
    pageSize: number;
}

const getPokemonId = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
}


export const PokeCardGrid = ({ page, pageSize }: PokeCardGridProps) => {
    const navigate = useNavigate();
    const { data, isLoading, error } = useGetPokedexListQuery({ page, pageSize });


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <Flex wrap gap="large" style={{ padding: "1em" }}>
            {data?.results.map((pokemon) => (
                <Card
                    hoverable
                    style={{ width: 240 }}
                    key={pokemon.name}
                    onClick={() => navigate(`/pokemon/${pokemon.name}`)}
                >
                    <Flex justify="center">
                        <PokemonImage
                            id={getPokemonId(pokemon.url)}
                            alt={pokemon.name}
                        />
                    </Flex>

                    <Typography.Title level={5} style={{ textTransform: 'capitalize', marginBottom: "0.5em", textAlign: "center" }}>{pokemon.name}</Typography.Title>
                </Card>
            ))}
        </Flex>
    );
}