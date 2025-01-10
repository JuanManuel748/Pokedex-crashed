import { Sprites } from "../interfaces/pokemon";
import { Type, PastType } from "../interfaces/pokemon";

export interface pokemon {
    id?: string;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    location_area_encounters: string;
    sprites: Sprites;
    types: Type[];
}
