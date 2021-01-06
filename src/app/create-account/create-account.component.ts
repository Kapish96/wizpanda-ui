import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { StudentVO } from '../interfaces/StudentVO';
import { CreateAccountService } from '../services/create-account/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  private notifier : NotifierService;
  constructor(notifier: NotifierService, private createAccountService: CreateAccountService) { 
    this.notifier = notifier;
  }

  ngOnInit(): void {
  }

  createAccount(name: string, email: string, numb: string, password: string){

    let studentVO = new StudentVO(name, email, numb, password);
    this.createAccountService.createAccount(studentVO).subscribe(data =>{
      this.notifier.notify("success",JSON.stringify(data))
    },error=>{
      console.log("error here "+error);
      
      this.notifier.notify("error","Error while creating account");
    });
    
  }


}
