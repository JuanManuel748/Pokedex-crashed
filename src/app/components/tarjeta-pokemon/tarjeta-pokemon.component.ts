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
  styleUrl: './tarjeta-pokemon.component.css'
})
export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonSv: PokemonService) {}


  ngOnChanges(changes: SimpleChanges): void {
    this.getInfo();
  }

  @Input() data:Result|undefined;
  @Input() selected:boolean = false;
  @Output() clicked = new EventEmitter<string>();
  idPk:string = "0";


  getInfo() {
    if(this.data) {
      this.idPk = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemonSv.getById(this.idPk);
    }
  }
}
