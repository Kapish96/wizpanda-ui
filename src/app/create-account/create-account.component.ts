import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { StudentVO } from '../interfaces/StudentVO';
import { CreateAccountService } from '../services/create-account/create-account.service';
import{MatDialogRef, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  private notifier : NotifierService;
  constructor(notifier: NotifierService, private createAccountService: CreateAccountService,
    private dialog: MatDialog) { 
    this.notifier = notifier;
  }

  ngOnInit(): void {
  }

  createAccount(name: string, email: string, numb: string, password: string){

    let message = "";
    let flag = false;
    if(name=="" || email=="" || numb=="" || password==""){
      message = "Please fill the required details";
      flag = true;
    } else if(numb.length>10){
      message = "Mobile Number Invalid";
      flag = true;
    }

    if(flag){
      const dialogRef = this.dialog.open(AlertBox, {
        width: '250px',
      });
      let instance = dialogRef.componentInstance;
      instance.message = message;
      return;
    }
    
    let studentVO = new StudentVO(name, email, numb, password);
    this.createAccountService.createAccount(studentVO).subscribe(data =>{
      this.notifier.notify("success",JSON.stringify(data))
    },error=>{
      console.log("error here "+error);
      
      this.notifier.notify("error","Error while creating account");
    });
    
  }


}

@Component({
  selector: 'alert-box',
  template: `
  <div mat-dialog-content><strong>{{message}}</strong>
 <br>
 <button mat-button (click)="close()" >Ok</button>
 </div>
  `
})
export class AlertBox {

  public message: string = "Please fill the required fields.";
  constructor(public dialogRef: MatDialogRef<AlertBox>) {}

  close(): void {
    this.dialogRef.close();
  }
}

