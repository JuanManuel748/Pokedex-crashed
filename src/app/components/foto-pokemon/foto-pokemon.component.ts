import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foto-pokemon', 
  standalone: true,
  templateUrl: './foto-pokemon.component.html',
  styleUrl: './foto-pokemon.component.css',
  imports: [CommonModule]
})
export class FotoPokemonComponent  {
 

  @Input() pokemon?:Pokemon;
}
