
export interface Pokemon {
    id: number;
    name: string;
    picture: string;
    life: number;
    damage: number;
    types: [string] | [string, string] | [string, string, string]; // ici cela veut dire que çaz peut avoir soit un type , soit deux types ou trois types ou eoncore on peut juste ecrire type:sreing[]
    created: Date;
}

export type PokemonList = Pokemon[];