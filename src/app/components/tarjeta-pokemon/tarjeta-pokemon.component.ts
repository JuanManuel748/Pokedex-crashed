import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../../interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.css']
})
export class TarjetaPokemonComponent implements OnChanges {

  constructor(private pokemonSv: PokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.extraerInformacion();
  }

  @Input() data: Result | undefined;
  @Input() selected: boolean = false;
  @Input() fullData?: Pokemon;
  @Output() clicked = new EventEmitter<string>();
  idPk: string = "0";

  extraerInformacion() {
    if (this.data && this.data.url !== "") {
      console.log('Data URL:', this.data.url); // Verifica el valor de data.url
      this.idPk = this.data.url.substring(34, this.data.url.length - 1);
      console.log('Extracted ID:', this.idPk); // Verifica el valor de idPk
      this.pokemonSv.getById(this.idPk).then(() => {
        // Asegúrate de que se realiza la llamada al servicio
      });
    } else if (this.fullData) {
      console.log('Full Data URL:', this.fullData.species.url); // Verifica el valor de fullData.species.url
      this.idPk = this.fullData.species.url.substring(42, this.fullData.species.url.length - 1);
      console.log('Extracted ID:', this.idPk); // Verifica el valor de idPk
      this.data = {
        name: this.fullData.species.name,
        url: ""
      };
    }
    console.log('Final ID:', this.idPk); // Verifica el valor final de idPk
  }
}