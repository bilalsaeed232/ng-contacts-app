import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private tokenKey = 'contacts-api-jwt';

    constructor(private router: Router) { }

    setToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(): string {
        return localStorage.getItem(this.tokenKey);
    }

    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        return localStorage.getItem(this.tokenKey) !== null;
    }

    logout() {
        this.removeToken();
        this.router.navigate(['login']);
    }

}
