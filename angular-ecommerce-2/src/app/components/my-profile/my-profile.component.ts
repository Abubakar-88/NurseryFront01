import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Customer } from 'src/app/common/customer';
import { UCustomer } from 'src/app/common/u-customer';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  id: number
  firstName: string;
  lastName: string;
  username: string;
  password: number;
  contact: number;
  email: string;
  address: string;

  customer: UCustomer
  isSignedin: boolean = false;

  signedinUser: string = '';

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private customerService: CustomerServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.isSignedin = this.authService.isUserSignedin();
    this.signedinUser = this.authService.getSignedinUser();

    if (!this.authService.isUserSignedin()) {
      this.router.navigateByUrl('signin');
    }

    this.id = this.authService.signInResponse?.id;
    this.customer = new UCustomer();
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
      this.authService.userDetails = data as any;
    });
  }

  editProfile() {
    this.id = this.authService.signInResponse?.id;
    this.router.navigate(['edit-profile']);
  }

}
