import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../assignments/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;

  constructor(private http: HttpClient) {}

  uri = "http://localhost:8010/api/user";

  logIn(login : string, password: string):Observable<User|undefined> {
    console.log("okkk ",this.uri + "/" + login)
    this.loggedIn = true;
    localStorage.setItem("loggedIn", "true")
    return this.http.get<User>(this.uri + "/" + login)
    
   // return this.http.post('/api/login', { email, password });
  }

  logOut() {
    this.loggedIn = false;
    localStorage.setItem("loggedIn", "false");
  }

  // renvoie une promesse qui est résolue si l'utilisateur est loggué
  isAdmin() {
    console.log("====>", localStorage.getItem("loggedIn"))
    const isUserAdmin = new Promise((resolve, reject) => {
      resolve(localStorage.getItem("loggedIn"))
    });
    return isUserAdmin;
  }
}
