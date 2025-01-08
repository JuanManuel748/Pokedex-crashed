import { Injectable } from '@angular/core';
import { Result } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {

    async getByPage(page:number, size:number = 100):Promise<Result[]> {
        if(page > 5) return [];
        const offset = size*(page-1);
        const resultFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`);
        const data = await resultFetch.json();
        if (data.results.length > 0) return data.results;
        return [];
    }

    async getById(id : string | number):Promise<Pokemon>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await res.json();
  }
  async getDescription(id: string | number):Promise<string>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) =>  texto.language.name === "es")
    return texto ? texto.flavor_text : "No se econtró descripción en español";
  }
}