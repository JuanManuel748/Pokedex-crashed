import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoPokemonComponent } from "../../components/foto-pokemon/foto-pokemon.component";
import { TarjetaPokemonComponent } from "../../components/tarjeta-pokemon/tarjeta-pokemon.component";
import { PokemonService } from '../../services/pokemon.service';
import { Result } from '../../interfaces/pokeapi';
import { Pokemon } from '../../interfaces/pokemon';
import { DetalleComponent } from '../../components/detalle/detalle.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}