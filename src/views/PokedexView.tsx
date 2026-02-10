import { Layout } from "antd";
import { POKEDEX_LIST_DETAILS } from "../api/MOCKs";
import { UiSearchBar } from "../components/base/UiSearchBar";

export const PokedexView = () => {
  const searchBarStyle = {
    width: '100%',
    maxWidth: '500px',
  }

  return (
    <>
      <Layout>
        <UiSearchBar style={searchBarStyle} />
        <h1>Pokedex</h1>
      </Layout>
      <div>
        {POKEDEX_LIST_DETAILS.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <div>
              {pokemon.types.map((type) => (
                <span key={type}>
                  {type}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};