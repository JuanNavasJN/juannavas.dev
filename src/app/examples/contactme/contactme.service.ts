import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactmeService {

  constructor(private http: Http) {}
    
  sendEmail(message: any) {

    return this.http.post(environment.url, message,  {})
      
  }
}