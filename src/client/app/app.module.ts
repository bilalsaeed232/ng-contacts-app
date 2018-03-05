import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ApiService } from './shared/api.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthGaurd } from './shared/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactListComponent,
    ContactComponent,
    AddContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService, AuthService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
