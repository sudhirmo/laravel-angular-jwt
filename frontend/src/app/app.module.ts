import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { JarwisService } from './services/jarwis.service';
// import { TokenService } from './services/token.service';
// import { AuthService } from './services/auth.service';
// import { AfterLoginService } from './services/after-login.service';
// import { BeforeLoginService } from './services/before-login.service';
// import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    ProfileComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    FaqComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
