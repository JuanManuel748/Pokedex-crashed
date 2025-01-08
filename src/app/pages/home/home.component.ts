import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoPokemonComponent } from "../../components/foto-pokemon/foto-pokemon.component";
import { TarjetaPokemonComponent } from "../../components/tarjeta-pokemon/tarjeta-pokemon.component";
import { PokemonService } from '../../services/pokemon.service';
import { Result } from '../../interfaces/pokeapi';
import { Pokemon } from '../../interfaces/pokemon';
import { DetalleComponent } from '../../components/detalle/detalle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FotoPokemonComponent, TarjetaPokemonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemonList:Result[] = [];
  page:number = 1;
  loading:boolean = false;
  pokemonSelected?:Pokemon;


  @ViewChild('tarjetas') tarjetasElement:ElementRef | undefined

  constructor(private pokemonSv: PokemonService) {}



  ngOnInit(): void {
    this.loadList();
  }

  async loadList() {
    if (this.loading) return;
    this.loading = true;
    this.pokemonList = [...this.pokemonList, ...await this.pokemonSv.getByPage(this.page)];
    this.page++;
    this.loading = false;
  }

  onScroll(e:any) {
    if (
      Math.round(
        this.tarjetasElement?.nativeElement.clientHeight + this.tarjetasElement?.nativeElement.scrollTop
      ) === e.srcElement.scrollHeight
    ) {
      this.loadList();
    }
  }

  async tarjetaClick(e:string) {
    console.log(e);
    this.pokemonSelected = await this.pokemonSv.getById(e);
  }
}