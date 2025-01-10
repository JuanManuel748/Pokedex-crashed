import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null> | undefined;
  background: string = '';
  private static background: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.user$ = this.authService.getUser(); // Obtiene el estado del usuario como un observable
    this.background = "blue";
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.background = event.urlAfterRedirects.includes('/pokemon-list') ? 'header-pokemon-list' : '';
      }
    });
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }

  logout(): void {
    this.authService.logout();
  }

  getBackground(): string {
    return HeaderComponent.background;
  }

  static setBackground(color: string): void {
    this.background = color;
  }
}