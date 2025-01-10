import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { ErrorPageComponent } from './error-page/error-page.component'; // Importa el componente de error
import { routes } from './app.routes'; // Importa las rutas

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PokemonListComponent,
    ErrorPageComponent // Declara el componente de error
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configura las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }