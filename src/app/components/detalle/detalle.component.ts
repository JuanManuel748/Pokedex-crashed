import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { TarjetaPokemonComponent } from '../tarjeta-pokemon/tarjeta-pokemon.component';
import { Pokemon } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, TarjetaPokemonComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnChanges {
  @Input() pokemon?: Pokemon;
  @Input() abierto:boolean=false;
  @Output() clicked= new EventEmitter();
  descripcion: string = "";
  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.pokemon) {
      if (this.pokemon?.id !== undefined) {
        this.pokemonService.getDescription(this.pokemon.id).then((res) => {
          this.descripcion = res;
        });
      }
      
    }
  }
  getTipoClase(tipo: string): string {
    console.log(tipo);
    switch (tipo) {
      case 'bug':
        return 'tipo-bicho';
      case 'dragon':
        return 'tipo-dragon';
      case 'fairy':
        return 'tipo-hada';
      case 'fire':
        return 'tipo-fuego';
      case 'ghost':
        return 'tipo-fantasma';
      case 'ground':
        return 'tipo-tierra';
      case 'normal':
        return 'tipo-normal';
      case 'psychic':
        return 'tipo-psiquico';
      case 'steel':
        return 'tipo-acero';
      case 'dark':
        return 'tipo-siniestro';
      case 'electric':
        return 'tipo-electrico';
      case 'fighting':
        return 'tipo-lucha';
      case 'flying':
        return 'tipo-volador';
      case 'grass':
        return 'tipo-planta';
      case 'poison':
        return 'tipo-veneno';
      case 'ice':
        return 'tipo-hielo';
      case 'water':
        return 'tipo-agua';
      case 'rock':
        return 'tipo-roca';
      default:
        return '';
    }
  }
}
