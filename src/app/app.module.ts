import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { MainComponent } from './components/main/main.component';
import { PlantillacvComponent } from './components/plantillacv/plantillacv.component';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    PlantillacvComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    


  ],
  providers: [    provideOAuthClient(),
    provideHttpClient(),  provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
