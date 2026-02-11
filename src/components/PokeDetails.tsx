import React from "react";
import { Badge, Card, Col, Divider, Flex, Progress, Row, Tag, Typography } from "antd";
import { type Pokemon } from "../api/POKE_DETAILS";
import { BULBASAUR } from "../api/POKE_DETAILS";
import { POKE_TYPES_COLOR } from "../api/MOCKs";
import UiTag from "./base/UiTag";
import { calcPokeStatsPercentage, getPokeHeight, getPokeWeight } from "../utils/helpers";
import { IconBoltFilled, IconHeartFilled, IconShieldFilled, IconSwords, IconBadgeFilled, IconGalaxy } from "@tabler/icons-react";

const POKE_STATS_BASE: Record<string, {
    color: string;
    name: string;
    icon: React.ElementType;
}> = {
    "hp": {
        color: "#ff4d4f",
        name: "HP",
        icon: IconHeartFilled
    },
    "attack": {
        color: "#1890ff",
        name: "Attack",
        icon: IconSwords
    },
    "defense": {
        color: "#52c41a",
        name: "Defense",
        icon: IconShieldFilled
    },
    "special-attack": {
        color: "#faad14",
        name: "Special Attack",
        icon: IconGalaxy
    },
    "special-defense": {
        color: "#722ed1",
        name: "Special Defense",
        icon: IconBadgeFilled
    },
    "speed": {
        color: "#eff142ff",
        name: "Speed",
        icon: IconBoltFilled
    }
}

export const PokeDetails = (/* { pokemon }: { pokemon: Pokemon } */) => {
    const pokemon: Pokemon = BULBASAUR;

    // get image
    const sprite = pokemon.sprites.other?.["official-artwork"]?.front_default ?? pokemon.sprites.front_default;

    return (
        <Card variant="outlined" style={{ overflow: 'hidden' }}>

            {/* Header */}
            <Flex justify="end">
                <Badge color="gray" count={`# ${pokemon.id}`} />
            </Flex>
            <Flex justify="center">
                <img src={sprite} alt={pokemon.name} style={{ maxHeight: 200 }} />
            </Flex>
            <Typography.Title level={3} style={{ textAlign: 'center', textTransform: 'capitalize', marginBottom: "0.3em" }}>{pokemon.name}</Typography.Title>
            <Flex justify="center" gap="middle">
                {pokemon.types.map((_type: Pokemon['types'][number]) => (
                    <UiTag
                        key={_type.type.name}
                        name={_type.type.name}
                        color={POKE_TYPES_COLOR[_type.type.name]}
                    />
                ))}
            </Flex>

            <Divider />

            {/* Abilities & Stats */}
            <Flex justify="center">
                <Typography.Title level={5}>Abilities</Typography.Title>
            </Flex>
            <Flex justify="center" gap="small" style={{ marginBottom: "1em" }}>
                {pokemon.abilities.map((ability: Pokemon['abilities'][number]) => (
                    <Tag color="gray" variant="solid" key={ability.ability.name}>
                        <Typography.Text style={{ color: "white" }} italic >{ability.ability.name}</Typography.Text>
                    </Tag>
                ))}
            </Flex>
            {pokemon.stats.map((stat: Pokemon['stats'][number]) => {
                const statBase = POKE_STATS_BASE[stat.stat.name];
                const Icon = statBase.icon;
                return (
                    <Flex key={stat.stat.name} align="center" gap="middle" style={{ marginBottom: '8px' }}>
                        <div style={{ minWidth: 150 }}>
                            <Flex align="center" gap="small">
                                <Icon size={20} color={statBase.color} />
                                <Typography.Text>{statBase.name}</Typography.Text>
                            </Flex>
                        </div>
                        <Progress
                            strokeColor={statBase.color}
                            percent={calcPokeStatsPercentage(stat.base_stat)}
                            style={{ flex: 1, marginBottom: 0 }}
                        />
                    </Flex>
                );
            })}

            <Divider />

            {/* About */}
            <Flex justify="center">
                <Typography.Title level={5}>About</Typography.Title>
            </Flex>
            <Row justify="space-between" gutter={16}>
                <Col flex={1}>
                    <Flex vertical align="center">
                        <p style={{ marginBottom: "0.5em" }}>Height</p>
                        <Tag variant="outlined" key={pokemon.height}>
                            <Typography.Text italic >{getPokeHeight(pokemon.height)} m</Typography.Text>
                        </Tag>
                    </Flex>
                </Col>
                <Col flex={1}>
                    <Flex vertical align="center">
                        <p style={{ marginBottom: "0.5em" }}>Weight</p>
                        <Tag variant="outlined" key={pokemon.weight}>
                            <Typography.Text italic >{getPokeWeight(pokemon.weight)} kg</Typography.Text>
                        </Tag>
                    </Flex>
                </Col>
                <Col flex={1}>
                    <Flex vertical align="center">
                        <p style={{ marginBottom: "0.5em" }}>Base Experience</p>
                        <Tag variant="outlined" key={pokemon.base_experience}>
                            <Typography.Text italic >{pokemon.base_experience}</Typography.Text>
                        </Tag>
                    </Flex>
                </Col>
            </Row>
        </Card>
    );
};