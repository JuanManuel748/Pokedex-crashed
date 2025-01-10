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

 
 
}
