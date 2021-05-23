import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpservice: HttpService) { }

  loginUser(data){
    return this.httpservice.post('/api/login',data).pipe(
      catchError(err=> of({error:true,err:err,message:'Server Error', data:[]})));
  }

}
