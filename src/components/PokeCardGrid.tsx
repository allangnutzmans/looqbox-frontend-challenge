import { Flex, Card, Badge, Typography } from "antd";
import { POKEDEX_LIST_DETAILS, POKE_TYPES_COLOR } from "../api/MOCKs";
import UiTag from "./base/UiTag";
import { useNavigate } from "react-router";

export const PokeCardGrid = () => {
    const navigate = useNavigate();

    return (
        <Flex wrap gap="large">
            {POKEDEX_LIST_DETAILS.map((pokemon) => (
                <Card
                    hoverable
                    style={{ width: 240 }}
                    key={pokemon.id}
                    onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                >
                    <Flex justify="end">
                        <Badge color="gray" count={`# ${pokemon.id}`} />
                    </Flex>
                    <Flex justify="center">
                        <img
                            src={pokemon.image}
                            alt={pokemon.name} />
                    </Flex>
                    <Typography.Title level={5} style={{ textTransform: 'capitalize', marginBottom: "0.5em", textAlign: "center" }}>{pokemon.name}</Typography.Title>
                    <Flex justify="center" gap="middle">
                        {pokemon.types.map((type) => (
                            <UiTag
                                key={type}
                                name={type}
                                color={POKE_TYPES_COLOR[type]}
                            />
                        ))}
                    </Flex>
                </Card>
            ))}
        </Flex>
    );
}