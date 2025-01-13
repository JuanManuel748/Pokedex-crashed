import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { party } from '../../models/party';
import { PartyService } from '../../services/party.service';
import { HeaderComponent } from '../../components/header/header.component';
import { CollectionReference } from 'firebase/firestore';

@Component({
  selector: 'app-party-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {
  parties: party[] = [];

  constructor(private partyService: PartyService) { }

  ngOnInit(): void {
    this.partyService.testConnection(); 
    this.partyService.getParties().subscribe(parties => {
      this.parties = parties;
    });
  }

  deleteParty(id: string): void {
    this.partyService.deleteParty(id).then(() => {
      this.parties = this.parties.filter(p => p.id !== id);
    });
  }
}