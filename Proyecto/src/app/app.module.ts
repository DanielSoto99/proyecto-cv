import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
