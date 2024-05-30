import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MainComponent } from './components/main/main.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ProductoComponent } from './components/producto/producto.component';
const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'home', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'servicios', component: ServicioComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'marcas', component: MarcasComponent},
  {path: 'contactenos', component: ContactenosComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
