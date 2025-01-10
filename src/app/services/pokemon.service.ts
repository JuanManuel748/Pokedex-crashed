import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc, docData, deleteDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { pokemon } from '../models/pokemon';
import { Result } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.pokemonCollection = collection(this.firestore, 'pokemons');
  }

  // Obtener todos los pokemons
  getPokemons(): Observable<pokemon[]> {
    return collectionData(this.pokemonCollection, { idField: 'id' }) as Observable<pokemon[]>;
  }

  // Obtener un pokemon por ID
  getPokemon(id: string): Observable<pokemon | undefined> {
    const pokemonDocRef = doc(this.firestore, `pokemons/${id}`);
    return docData(pokemonDocRef) as Observable<pokemon | undefined>;
  }

  // Agregar un nuevo pokemon
  addPokemon(pokemon: pokemon): Promise<void> {
    return addDoc(this.pokemonCollection, pokemon) as unknown as Promise<void>;
  }

  // Actualizar un pokemon existente
  updatePokemon(id: string, pokemon: Partial<pokemon>): Promise<void> {
    const pokemonDocRef = doc(this.firestore, `pokemons/${id}`);
    return updateDoc(pokemonDocRef, pokemon) as Promise<void>;
  }

  // Eliminar un pokemon
  deletePokemon(id: string): Promise<void> {
    const pokemonDocRef = doc(this.firestore, `pokemons/${id}`);
    return deleteDoc(pokemonDocRef) as Promise<void>;
  }

  // Métodos adicionales existentes
  async getByPage(page: number, size: number = 100): Promise<Result[]> {
    if (page > 5) return [];
    const offset = size * (page - 1);
    const resultFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`);
    const data = await resultFetch.json();
    if (data.results.length > 0) return data.results;
    return [];
  }

  async getById(id: string): Promise<pokemon> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json() as pokemon;

  }

  async getDescription(id: string | number): Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto: any) => texto.language.name === "es");
    return texto ? texto.flavor_text : "No se encontró descripción en español";
  }
}