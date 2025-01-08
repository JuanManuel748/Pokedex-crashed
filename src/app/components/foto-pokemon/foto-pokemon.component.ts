import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrl: './foto-pokemon.component.css'
})
export class FotoPokemonComponent  {
 

  @Input() pokemon?:Pokemon;
}
