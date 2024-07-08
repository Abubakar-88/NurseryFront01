import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UCustomer } from 'src/app/common/u-customer';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	customers: UCustomer[];
	greeting: any[] = [];
	
	get isSignedin(): boolean {
		return this.authService.isUserSignedin()
	}
	get signedinUser(): string {
		return this.authService.getSignedinUser()
	}

	constructor(private route: ActivatedRoute,
		private router: Router,
		private http: HttpClient,
		private authService: AuthService,
		private customerService: CustomerServiceService) { }

	ngOnInit() {
		if (!this.authService.isUserSignedin()) {
			this.router.navigateByUrl('signin');
		}
		this.getCustomerList();
	}

	doSignout() {
		this.authService.signout();
		window.location.reload();
	}

	private getCustomerList() {
		this.customerService.getCustomerList().subscribe(data => {
			this.customers = data;
		});
	}

	myProfile(id: number) {
		this.router.navigate(['myProfile', id]);
	}

	// private getCustomer(){
	//   this.customerService.getCustomerById().subscribe( data=> {
	// 	  this.customer=data;
	//   })


	// }



}
