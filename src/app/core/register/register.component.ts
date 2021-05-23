import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(public fb: FormBuilder, public route: Router) {
    this.registerForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required,Validators.pattern(/^[^\s@]+@[^\s@]+$/)]],
      password:['', Validators.required],
      confimPassword:['',Validators.required]
    })
   }
  ngOnInit(): void {
  }


  onregister(value){
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }

  }
  loginbutton(){
    this.route.navigateByUrl('login')
  }
}
