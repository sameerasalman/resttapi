import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webReqService: WebrequestService) { }

  register(title: string) {
    return this.webReqService.post('register',{title});
  }

  login(title: string){
    return this.webReqService.post('login', {title});
  }

}
