type NameAndURL = {
    name: string;
    url: string;
};

export type Pokemon = {
    abilities: Ability[];
    base_experience: number;
    // sounds
    cries: {
        latest: string;
        legacy: string;
    };
    forms: NameAndURL[];
    // wont use
    game_indices: {
        game_index: number;
        version: NameAndURL;
    }[];
    height: number;
    held_items: [];
    id: 1;
    order: number;
    is_default: true;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    past_stats: Record<string, unknown>[];
    past_types: [];
    species: NameAndURL;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
};

/// Poke abilities
export type Ability = {
    ability: NameAndURL;
    is_hidden: boolean;
    slot: number;
};

// Poke moves
export type Move = {
    move: NameAndURL;
    version_group_details: {
        level_learned_at: number;
        move_learn_method: NameAndURL;
        order: number | null;
        version_group: NameAndURL;
    }[];
};

// Poke types
export type Type = {
    slot: number;
    type: NameAndURL;
};

// Stripes
export type Sprites = {
    front_default: string;
    other?: {
        'official-artwork'?: {
            front_default: string;
        };
    } & Record<string, unknown>;
};

// Poke stats
export type Stat = {
    base_stat: number;
    effort: number;
    stat: NameAndURL;
};
