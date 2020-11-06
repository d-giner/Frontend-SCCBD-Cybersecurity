import { RouterModule, Routes } from '@angular/router';
import { AliceWithTtpComponent } from './components/alice-with-ttp/alice-with-ttp.component';
import { ExampleComponent } from './example/example.component';
import { AliceWithRsaComponent } from './components/alice-with-rsa/alice-with-rsa.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home-component', component: HomeComponent },
  { path: 'first-scenario', component: ExampleComponent },
  { path: 'ttp-scenario', component: AliceWithTtpComponent },
  { path: 'rsa-scenario', component: AliceWithRsaComponent },
  // Esta ruta es para seleccionemos un enlace sin ruta cualquiera.
  { path: '**', pathMatch: 'full', redirectTo: 'home-component' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);