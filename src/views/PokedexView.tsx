import Sider from "antd/es/layout/Sider";
import { POKE_TYPES, POKEDEX_LIST_DETAILS, type Pokemon } from "../api/MOCKs";
import { UiSearchBar } from "../components/base/UiSearchBar";
import { Card, Flex, Badge, Tag, Pagination, Layout } from 'antd';
import { PokeDetails } from "../components/PokeDetails";
import { useState } from "react";

export const PokedexView = () => {
  const searchBarStyle = {
    width: '100%',
    maxWidth: '500px',
  }

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const handleSelectPokemon = (pokemon: Pokemon) => {
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
                <Badge count={`# ${pokemon.id}`} />
              </Flex>
              <Flex justify="center">
                <img
                  src={pokemon.image}
                  alt={pokemon.name} />
              </Flex>
              <Flex justify="center" style={{ marginBottom: "1em" }}>
                <h2>{pokemon.name}</h2>
              </Flex>
              <Flex justify="center" gap="middle">
                {pokemon.types.map((type) => (
                  <Tag
                    variant="solid"
                    style={{
                      fontWeight: 'bold',
                      fontSize: '1em',
                      textTransform: 'uppercase',
                    }} color={POKE_TYPES[type]} key={type}>
                    {type}
                  </Tag>
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
        <Sider width="30%">
          <PokeDetails pokemon={selectedPokemon} />
        </Sider>
      )}
    </Layout>
  );
};