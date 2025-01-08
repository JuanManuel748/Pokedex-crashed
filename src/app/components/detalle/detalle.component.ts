import { Component, Input, OnChanges } from '@angular/core';
import { TarjetaPokemonComponent } from '../tarjeta-pokemon/tarjeta-pokemon.component';
import { Pokemon } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, TarjetaPokemonComponent,HomeComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnChanges {
  @Input() pokemon?: Pokemon;
  descripcion: string = "";
  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.pokemon) {
      this.pokemonService.getDescription(this.pokemon?.id).then((res) => {
         this.descripcion = res;
      });
    }
  }

 
 
}
