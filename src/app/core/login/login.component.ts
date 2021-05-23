import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import {ApiResponse} from '../../interfaces/response';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted= false;
  loading= false;
  constructor(public fb: FormBuilder, public login:LoginService, public route: Router) {
    this.loginForm = this.fb.group({
      email:['', [Validators.required,Validators.pattern(/^[^\s@]+@[^\s@]+$/)]],
      password:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  onLogin(value){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    console.log(value);
    this.login.loginUser(value).subscribe((res: ApiResponse) =>{
      console.log(res)
      if(res.code == 200){
        Swal.fire('User Authenticated','','success');
      }else{
        Swal.fire('User Error','','error')
      }

    });
  }

  homebutton(){
    this.route.navigateByUrl('')
  }
}
