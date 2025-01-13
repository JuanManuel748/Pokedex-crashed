import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PartyListComponent } from './pages/party-list/party-list.component';
import { ErrorPageComponent } from './pages/error/error-page.component'; 


export const routes: Routes = [
    { path: "", component: HomeComponent },
    {path: "home", redirectTo: "", pathMatch: "full"}, // Redirige a la portada
    { path: "parties", component: PartyListComponent },
    { path: '**', component: ErrorPageComponent }

];
