import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { ErrorPageComponent } from './pages/error/error-page.component'; 


export const routes: Routes = [
    { path: "", component: HomeComponent },
    {path: "home", redirectTo: "", pathMatch: "full"}, // Redirige a la portada
    { path: "pokemons", component: PokemonListComponent },
    { path: '**', component: ErrorPageComponent }

];
