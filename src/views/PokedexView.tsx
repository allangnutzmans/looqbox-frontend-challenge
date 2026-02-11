import Sider from "antd/es/layout/Sider";
import { POKE_TYPES_COLOR, POKEDEX_LIST_DETAILS, type PokemonPreview } from "../api/MOCKs";
import { UiSearchBar } from "../components/base/UiSearchBar";
import { Card, Flex, Badge, Pagination, Layout, Typography } from 'antd';
import { PokeDetails } from "../components/PokeDetails";
import { useState } from "react";
import UiTag from "../components/base/UiTag";

export const PokedexView = () => {
  const searchBarStyle = {
    width: '100%',
    maxWidth: '500px',
  }

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonPreview | null>(null);

  const handleSelectPokemon = (pokemon: PokemonPreview) => {
    setSelectedPokemon(pokemon);
  };



  return (
    <Layout>
      <div>
        <Flex justify="start" style={{ marginBottom: "2em" }}>
          <UiSearchBar style={searchBarStyle} />
        </Flex>
        <Flex wrap gap="large">
          {POKEDEX_LIST_DETAILS.map((pokemon) => (
            <Card
              hoverable
              style={{ width: 240 }}
              key={pokemon.id}
              onClick={() => handleSelectPokemon(pokemon)}
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
                    name={type}
                    color={POKE_TYPES_COLOR[type]}
                  />
                ))}
              </Flex>
            </Card>
          ))}
        </Flex>
        <Flex justify="end" style={{ marginTop: "2em" }}>
          <Pagination defaultCurrent={1} total={50} />
        </Flex>
      </div>
      {selectedPokemon && (
        <Sider style={{ minWidth: "400px", backgroundColor: "transparent" }} width="30%">
          <PokeDetails pokemon={selectedPokemon} />
        </Sider>
      )}
    </Layout>
  );
};