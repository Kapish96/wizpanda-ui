import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { LoginServiceService } from '../services/login-service/login-service.service';

import { StudentVO } from '../interfaces/StudentVO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private notifier : NotifierService;
  constructor(notifier: NotifierService, private loginServiceService: LoginServiceService) { 
    this.notifier = notifier; 
  }

  ngOnInit(): void {
  }

  public login(email: string, password: string){
    let studentVO = new StudentVO("", email, "", password);
    this.loginServiceService.login(studentVO).subscribe(data =>{

    }, error =>{
      this.notifier.notify("error","Email or Username is Wrong");
    });
  }

}
