import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyService } from '../../services/party.service';
import { pokemon } from '../../models/ownedPokemon';

@Component ({
    selector: 'app-tarjeta-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-equipo.component.html',
  styleUrls: ['./tarjeta-equipo.component.css']
})
export class TarjetaEquipoComponent implements OnInit, OnChanges {
    pokemons: pokemon[] = [];
    @Input() party: any;

    constructor(private partySv: PartyService) {}
    
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }

    ngOnInit(): void {
        this.getInfo();
    }


    
    getInfo(): void {
      /*
        if (this.party) {
          this.partySv.getPokemons(this.party.id).subscribe((pokemons: pokemon[]) => {
            this.pokemons = pokemons;
          });
        }
          */
      }

}
