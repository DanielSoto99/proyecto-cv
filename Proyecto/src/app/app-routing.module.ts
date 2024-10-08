import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { PlantillacvComponent } from './components/plantillacv/plantillacv.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

const routes: Routes = [
  { path:'', component: MainComponent }, 
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'plantillacv', component: PlantillacvComponent},
  { path:'menuUser', component: LeftMenuComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
