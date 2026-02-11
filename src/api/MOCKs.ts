// MOCKs
const BASE_URL = "https://pokeapi.co/api/v2";

export const POKEDEX_LIST_BASE = {
    "count": 1350,
    "next": `${BASE_URL}/pokemon?offset=20&limit=20`,
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": `${BASE_URL}/pokemon/1/`
        },
        {
            "name": "ivysaur",
            "url": `${BASE_URL}/pokemon/2/`
        },
        {
            "name": "venusaur",
            "url": `${BASE_URL}/pokemon/3/`
        },
        {
            "name": "charmander",
            "url": `${BASE_URL}/pokemon/4/`
        },
        {
            "name": "charmeleon",
            "url": `${BASE_URL}/pokemon/5/`
        },
        {
            "name": "charizard",
            "url": `${BASE_URL}/pokemon/6/`
        },
        {
            "name": "squirtle",
            "url": `${BASE_URL}/pokemon/7/`
        },
        {
            "name": "wartortle",
            "url": `${BASE_URL}/pokemon/8/`
        },
        {
            "name": "blastoise",
            "url": `${BASE_URL}/pokemon/9/`
        },
        {
            "name": "caterpie",
            "url": `${BASE_URL}/pokemon/10/`
        },
        {
            "name": "metapod",
            "url": `${BASE_URL}/pokemon/11/`
        },
        {
            "name": "butterfree",
            "url": `${BASE_URL}/pokemon/12/`
        },
        {
            "name": "weedle",
            "url": `${BASE_URL}/pokemon/13/`
        },
        {
            "name": "kakuna",
            "url": `${BASE_URL}/pokemon/14/`
        },
        {
            "name": "beedrill",
            "url": `${BASE_URL}/pokemon/15/`
        },
        {
            "name": "pidgey",
            "url": `${BASE_URL}/pokemon/16/`
        },
        {
            "name": "pidgeotto",
            "url": `${BASE_URL}/pokemon/17/`
        },
        {
            "name": "pidgeot",
            "url": `${BASE_URL}/pokemon/18/`
        },
        {
            "name": "rattata",
            "url": `${BASE_URL}/pokemon/19/`
        },
        {
            "name": "raticate",
            "url": `${BASE_URL}/pokemon/20/`
        }
    ]
}

export type PokemonPreview = {
    id: number;
    name: string;
    image: string;
    types: string[];
}

export const POKEDEX_LIST_DETAILS: PokemonPreview[] = [
    {
        "id": 1,
        "name": "bulbasaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 2,
        "name": "ivysaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 3,
        "name": "venusaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 4,
        "name": "charmander",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "types": [
            "fire"
        ]
    },
    {
        "id": 5,
        "name": "charmeleon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "types": [
            "fire"
        ]
    },
    {
        "id": 6,
        "name": "charizard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "id": 7,
        "name": "squirtle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "types": [
            "water"
        ]
    },
    {
        "id": 8,
        "name": "wartortle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "types": [
            "water"
        ]
    },
    {
        "id": 9,
        "name": "blastoise",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "types": [
            "water"
        ]
    },
    {
        "id": 10,
        "name": "caterpie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "types": [
            "bug"
        ]
    },
    {
        "id": 11,
        "name": "metapod",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "types": [
            "bug"
        ]
    },
    {
        "id": 12,
        "name": "butterfree",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 13,
        "name": "weedle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 14,
        "name": "kakuna",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 15,
        "name": "beedrill",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 16,
        "name": "pidgey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 17,
        "name": "pidgeotto",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 18,
        "name": "pidgeot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 19,
        "name": "rattata",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        "types": [
            "normal"
        ]
    },
    {
        "id": 20,
        "name": "raticate",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "types": [
            "normal"
        ]
    }
]

// Probably will remain as a constant
export const POKE_TYPES_COLOR: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#21FF00",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD"
};
