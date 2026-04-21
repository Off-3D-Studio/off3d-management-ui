import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RegisterComponent } from './pages/register/register'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, // Tela de Login
  { path: 'register', component: RegisterComponent } // Tela de Cadastro
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}