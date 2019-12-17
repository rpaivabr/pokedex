export interface Pokemon {
    number: string;
    name: string;
    generation: string;
    weaknesses: string[];
    fastAttacks: {name: string, type: string, damage: number}[];
}
