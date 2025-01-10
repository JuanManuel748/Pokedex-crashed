import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp(environment.firestore)), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"pokedex-angular-7938e","appId":"1:855683080669:web:19f96403f4899158ac9634","storageBucket":"pokedex-angular-7938e.firebasestorage.app","apiKey":"AIzaSyCpL6VVsKrDrewOfSzhY1wObOBwKOJMoZQ","authDomain":"pokedex-angular-7938e.firebaseapp.com","messagingSenderId":"855683080669"})), provideAuth(() => getAuth())]
};