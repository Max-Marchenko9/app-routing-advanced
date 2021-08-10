import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  redirectUrl!: string;
  isLoggedIn = false;

  constructor() { }

  login(login: string, password: string): any{
    console.log(login)
    console.log(password)

    return login === 'admin' && password === '123' ? this.isLoggedIn = true : false;
  }
  logout() {
    this.isLoggedIn = false;
  }
}
