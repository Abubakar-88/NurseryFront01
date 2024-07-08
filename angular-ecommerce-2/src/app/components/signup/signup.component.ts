import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { UCustomer } from 'src/app/common/u-customer';
import { Request } from 'src/app/request.model';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { NurseryWorldValidators } from 'src/app/validators/nursery-world-validators';
import { __assign, __values } from 'tslib';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	signupForm: FormGroup;
	displayError: any = "";
	customer: any;
	id: number;
  constructor(private authService: AuthService,private formBuilder: FormBuilder, private customerService: CustomerServiceService) { }

	username: string = '';
	password: string = '';
     email: string = '';
    firstName: string = '';
    lastName: string='';
    contact: string ='';
    address: string = '';
 // symbols: any;
	user_roles: any = [
		{name:'User', value:'ROLE_USER', selected: false},
		{name:'Admin', value:'ROLE_ADMIN', selected: false},
		{name:'Anonymous', value:'ROLE_ANONYMOUS', selected: false},
	]

	selectedRoles: string[] = [];

	error: string = '';
	success: string = '';

	ngOnInit(): void {
		// this.id = this.authService.signInResponse.id;
		// this.customer = new UCustomer();
		// this.customerService.getCustomerById(this.id).subscribe(data => {
		//   this.customer = data;
		//   this.authService.userDetails = data as any;
		//   console.log("customer: "+ this.customer);
		// });

		this.customerService.getCustomerList().subscribe(res => {
			console.log('Customers=' + JSON.stringify(res))
			this.customer = res;
		  })


	}

	onChangeCategory(event: any, role: any) {
		this.selectedRoles.push(role.value);
	}
	
	doSignup() {
		if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null && this.email !=='' && this.email !==null) {
			const request: Request = {
        username: this.username,
         password: this.password, 
        email: this.email,
        firstName: this.firstName,
		lastName:this.lastName,
        contact: this.contact,
        address: this.address
      };
	    
	  
			this.authService.signup(request).subscribe((result)=> {
		
				this.success = result;
                  window.location.reload();
			},
			
			(err) => {
                          
	

    


				   if(request.password.length < 8 || request.password.length >30){
					this.error = 'password length mustbe need 8 caracter';
	            	}  
					else if(request.username.length <3 || request.username.length >20  || request.username.split || request.username.split("_")[0]){
						this.error = 'Email or user name already use';
					}
					
	              else if(request.email.length <3 || request.email.length >20 || request.email.split){
						this.error = 'Email or user name already used '
						
					}
					else{
						this.error ='Something is wrong';
					}
			});
		} else {
			this.error = 'All fields are mandatory';
		}
	}
}


