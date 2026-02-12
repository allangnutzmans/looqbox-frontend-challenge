import { Flex, Card, Typography } from "antd";
import { useNavigate } from "react-router";
import { useGetPokedexListQuery } from "../api/client";

interface PokeCardGridProps {
    page: number;
    pageSize: number;
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

    const getPokemonId = (url: string) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
    }

    return (
        <Flex wrap gap="large">
            {data?.results.map((pokemon) => (
                <Card
                    hoverable
                    style={{ width: 240 }}
                    key={pokemon.name}
                    onClick={() => navigate(`/pokemon/${pokemon.name}`)}
                >
                    <Flex justify="center">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`}
                            alt={pokemon.name} />
                    </Flex>

                    <Typography.Title level={5} style={{ textTransform: 'capitalize', marginBottom: "0.5em", textAlign: "center" }}>{pokemon.name}</Typography.Title>
                </Card>
            ))}
        </Flex>
    );
}