import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UCustomer } from 'src/app/common/u-customer';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

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

  onSubmit() {
    this.customerService.updateCustomer(this.id, this.customer).subscribe(data => {
      this.goToMyProfile();
    },
      error => console.log(error)
    );
  }
  goToMyProfile() {
    this.router.navigate(['/my-profile']);
  }

}
