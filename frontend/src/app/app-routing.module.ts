import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:ChatWindowComponent
  },
  {
    path:'chat',
    component:ChatWindowComponent
  },
  {
  path:'edit-profile',
  component:EditProfileComponent
},
  {
  path:'logout',
  component:LogoutComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]

})

export class AppRoutingModule { }