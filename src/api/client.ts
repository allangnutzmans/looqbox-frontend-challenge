import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Pokemon } from "./POKE_DETAILS";

// Relevant types
interface PokemonListResult {
    name: string;
    url: string;
}

interface ListResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

const BASE_URL = "https://pokeapi.co/api/v2";

//type this
export const client = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (builder) => ({
        getPokedexList: builder.query<ListResponse<PokemonListResult>, void>({
            query: () => `pokemon?limit=21&offset=0`
        }),
        getPokemonById: builder.query<Pokemon, string>({
            query: (id) => `pokemon/${id}`
        })
    })
})


export const { useGetPokedexListQuery, usePrefetch, useGetPokemonByIdQuery } = client

    