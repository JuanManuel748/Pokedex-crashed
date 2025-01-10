import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { ErrorPageComponent } from './pages/error/error-page.component'; 
import { routes } from './app.routes'; 

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
    AppComponent,
    HomeComponent,
    LoginComponent,
    PokemonListComponent,
    ErrorPageComponent 
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }