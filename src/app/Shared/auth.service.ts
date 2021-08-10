import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  redirectUrl!: string;
  isLoggedIn = false;

  constructor() { }

  login(login: string, password: string): Promise<boolean> {
    const promice = new Promise(resolve => {
      setTimeout( () => {
        resolve({
          login: 'admin',
          password: '123'
        })
      }, 2000)
    })
    return promice.then((res: any) => {
      return login === res.login && password === res.password ? this.isLoggedIn = true : false;
    })
  }
  
  logout(): void {
    this.isLoggedIn = false;
  }
}
