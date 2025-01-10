import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    HeaderComponent.setBackground('blue');
  }

}
