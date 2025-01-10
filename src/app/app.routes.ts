import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { ErrorPageComponent } from './error-page/error-page.component'; // Importa el componente de error


export const routes: Routes = [
    { path: "", component: HomeComponent },
    {path: "home", redirectTo: "", pathMatch: "full"}, // Redirige a la portada
    { path: "pokemons", component: PokemonListComponent },
    { path: '**', component: ErrorPageComponent }

];
