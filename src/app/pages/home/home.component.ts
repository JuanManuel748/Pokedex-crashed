import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoPokemonComponent } from "../../components/foto-pokemon/foto-pokemon.component";
import { TarjetaPokemonComponent } from "../../components/tarjeta-pokemon/tarjeta-pokemon.component";
import { PokemonService } from '../../services/pokemon.service';
import { Result } from '../../models/pokeapi';
import { Pokemon } from '../../models/pokemon';
import { DetalleComponent } from '../../components/detalle/detalle.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FotoPokemonComponent, TarjetaPokemonComponent, DetalleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemonList:Result[] = [];
  page:number = 1;
  loading:boolean = false;
  pokemonSelected?:Pokemon;
  detalle:boolean=false;


  @ViewChild('tarjetas') tarjetasElement:ElementRef | undefined

  constructor(private pokemonSv: PokemonService) {}



  ngOnInit(): void {
    this.loadList();
    HeaderComponent.setBackground('blue');
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

  async tarjetaClick(e: string) {
    if (this.pokemonSelected && e === this.pokemonSelected?.toString()) {
      return this.cambiarEstadoDetalle();
    }
    this.pokemonSelected = await this.pokemonSv.getById(e);
  }

  cambiarEstadoDetalle(){
    if(this.pokemonSelected)
    this.detalle=!this.detalle;
  }
}