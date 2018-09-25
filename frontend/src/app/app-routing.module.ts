import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const appRoutes: Routes = [
	{
		path: 'home',
		component:HomeComponent
	},
	{
		path: 'login',
		component:LoginComponent
	},
	{
		path: 'signup',
		component:SignupComponent
	},
	{
		path: 'profile',
		component:ProfileComponent
	},
	{
		path: 'about',
		component:AboutComponent
	},
	{
		path: 'contact',
		component:ContactComponent
	},
	{
		path: 'services',
		component:ServicesComponent
	},
	{
		path: 'faq',
		component:FaqComponent
	},
	{
		path: 'enquiry',
		component:EnquiryComponent
	},
	{
		path: 'reset-password',
		component:ResetPasswordComponent
	},	
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
