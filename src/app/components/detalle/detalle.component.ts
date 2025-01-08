import { Component, Input } from '@angular/core';
import { TarjetaPokemonComponent } from '../tarjeta-pokemon/tarjeta-pokemon.component';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [TarjetaPokemonComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {


        @Input() pokemon?: Pokemon;
}
