import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon';
import { DetalleComponent } from '../detalle/detalle.component';
@Component({
  selector: 'app-foto-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foto-pokemon.component.html',
  styleUrl: './foto-pokemon.component.css'
})
export class FotoPokemonComponent {

  @Input() pokemon?:Pokemon;
}
