import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';

import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({

  declarations: [

    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatWindowComponent,
     LogoutComponent,
     EditProfileComponent

  ],

  imports: [

    BrowserModule,

    FormsModule,

    HttpClientModule,

    AppRoutingModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }