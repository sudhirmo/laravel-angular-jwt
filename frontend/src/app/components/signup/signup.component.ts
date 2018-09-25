import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

    public form = {
    	email:null,
    	password:null,
      cpassword:null
    };

  onSubmit()
  {
    
  }


  ngOnInit() {
  }

}
