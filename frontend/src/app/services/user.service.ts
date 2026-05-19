import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl =
    'http://localhost:5002/api/users';

  constructor(
    private http: HttpClient
  ) {}

  updateProfile(data:any){

    return this.http.put(

      `${this.apiUrl}/update-profile`,

      data

    );

  }

}