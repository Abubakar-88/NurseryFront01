import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'signin', component: SigninComponent },
  {path: 'order-item/:id', component: OrderItemComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'edit-profile', component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
