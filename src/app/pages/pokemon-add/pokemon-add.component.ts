import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { HeaderComponent } from '../../components/header/header.component';
import { pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css'],
})
export class PokemonAddComponent implements OnInit {
  pokemonForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    base_experience: new FormControl<number>(0),
    height: new FormControl<number>(0),
    weight: new FormControl<number>(0),
    is_default: new FormControl<boolean>(false),
    order: new FormControl<number>(0),
    location_area_encounters: new FormControl<string>(''),
    sprites: new FormControl<string>(''),
    types: new FormControl<string[]>([]),
    species: new FormControl<string>(''),
  });

  ngOnInit(): void {
    HeaderComponent.setBackground('red');
  }
  

  constructor(private pokemonService: PokemonService) {}
}