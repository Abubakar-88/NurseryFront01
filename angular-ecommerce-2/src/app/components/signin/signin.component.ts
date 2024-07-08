import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Request } from 'src/app/request.model';
@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	username: string = '';
	password: string = '';

	isSignedin = false;

	error: string = '';

	//storage: Storage = sessionStorage;


	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit() {
		this.isSignedin = this.authService.isUserSignedin();

		if (this.isSignedin) {
			this.router.navigateByUrl('my-profile?.id');

		}
	}

	doSignin() {
		if (this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
			const request: Request = {
				username: this.username,
				password: this.password,
				email: '',
				firstName: '',
				lastName: '',
				contact: '',
				address: ''

				// //retrieve the user's email from authentication response 
				// const theEmail = res.email;

				// // now store the email in browser storage
				// this.storage.setItem('userEmail', JSON.stringify(theEmail));
			};

			this.authService.signin(request).subscribe((_result) => {
				this.router.navigateByUrl('my-profile');
			}, () => {
				this.error = 'Either invalid credentials or something went wrong';
			});
		} else {
			this.error = 'Invalid Credentials';
		}
	}
}


