import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted= false;
  loading= false;
  constructor(public fb: FormBuilder, public http:HttpClient) {
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
    this.http.post('http://localhost:3000/api/login/',value).subscribe(res =>{
      console.log(res);
      var data = JSON.stringify(res)
      var data2 = JSON.parse(data)
      if(data2.error == false){
        Swal.fire('User Authenticated','','success');
      }else{
        Swal.fire('User Error','','error')
      }

    });
  }
}
