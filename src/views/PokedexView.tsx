import Sider from "antd/es/layout/Sider";
import { POKE_TYPES_COLOR, POKEDEX_LIST_DETAILS } from "../api/MOCKs";
import { UiSearchBar } from "../components/base/UiSearchBar";
import { Card, Flex, Badge, Pagination, Layout, Typography } from 'antd';
import UiTag from "../components/base/UiTag";
import { Outlet, useNavigate, useParams } from "react-router";

export const PokedexView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const searchBarStyle = {
    width: '100%',
    maxWidth: '500px',
  }

  return (
    <Layout>
      <div style={{ flex: 1 }}>
        <Flex justify="start" style={{ marginBottom: "2em" }}>
          <UiSearchBar style={searchBarStyle} />
        </Flex>
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
        <Flex justify="end" style={{ marginTop: "2em" }}>
          <Pagination defaultCurrent={1} total={50} />
        </Flex>
      </div>

      {id && (
        <Sider style={{ minWidth: "400px", backgroundColor: "transparent" }} width="30%">
          <Outlet />
        </Sider>
      )}
    </Layout>
  );
};