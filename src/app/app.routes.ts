import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { ProductosComponent } from './pages/productos/productos';
import { ContactoComponent } from './pages/contacto/contacto';
import { DetailsComponent } from './pages/details/details';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: DetailsComponent },
  { path: 'contacto', component: ContactoComponent }
];
