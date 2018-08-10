import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/Rx';


@Injectable()
export class ContactmeService {

  constructor(private http: Http) {}
    
  sendEmail(message: any) {

    return this.http.post(environment.urlDev, message,  {})
      
  }
}