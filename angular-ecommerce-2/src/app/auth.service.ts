import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Request } from './request.model';
export interface User {
	address: string,
	contact: string,
	email: string,
	firstName: string,
	lastName:string,
	id: Number,
	roles: [{ id: number, name: string }]
	username: string
}
@Injectable({
	providedIn: 'root'
})
export class AuthService {


	private baseUrl = 'http://localhost:8083/api/auth/';
	private _userDetails: User;

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

	signin(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'signin', request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(map((resp) => {
			sessionStorage.setItem('user', request.username);
			sessionStorage.setItem('token', 'HTTP_TOKEN ' + resp.token);
			sessionStorage.setItem('signInResponse', JSON.stringify(resp));
			return resp;
		}));
	}

	signup(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'signup', request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json' }).pipe(map((resp) => {
			return resp;
		}));
	}


	signout() {
		sessionStorage.removeItem('user');
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('userDetails');
		sessionStorage.removeItem('signInResponse');

		this.router.navigateByUrl('signin');
	}


	isUserSignedin() {
		return sessionStorage.getItem('token') !== null;
	}

	getSignedinUser() {
		return sessionStorage.getItem('user') as string;
	}

	getToken() {
		let token = sessionStorage.getItem('token') as string;
		return token;
	}

	set userDetails(data) {
		sessionStorage.setItem('userDetails', JSON.stringify(data))
	}
	get userDetails(): User {
		return JSON.parse(sessionStorage.getItem('userDetails')) as User
	}
	get signInResponse() {
		return JSON.parse(sessionStorage.getItem('signInResponse'));
	}
}
