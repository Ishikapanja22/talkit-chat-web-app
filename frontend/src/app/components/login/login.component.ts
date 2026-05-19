import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService }
from '../../services/auth.service';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email = '';

  password = '';

  constructor(

    private authService: AuthService,

    private router: Router

  ) {}

  login(){

    const data = {

      email:this.email,

      password:this.password

    };

    this.authService
      .login(data)

      .subscribe({

        next:(res:any)=>{

          if(res.user){

            localStorage.setItem(

              'currentUser',

              JSON.stringify(res.user)

            );

          }

          if(res.token){

            localStorage.setItem(

              'token',

              res.token

            );

          }

          alert(
            'Login Successful'
          );

          this.router.navigate([
            '/chat'
          ]);

        },

        error:(err)=>{

          alert(

            err.error.message ||

            'Login Failed'

          );

        }

      });

  }

}