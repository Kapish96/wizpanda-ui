import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { LoginServiceService } from '../services/login-service/login-service.service';

import { MatTableDataSource } from '@angular/material/table';
import { StudentVO } from '../interfaces/StudentVO';
import { MatDialog } from '@angular/material/dialog';
import { AlertBox } from '../create-account/create-account.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private notifier : NotifierService;
  public loggedIn: boolean = false;
  public studentVO: any;
  public displayedColumns: string[] = [];
  public columnDefs = [{headerName:'Name', field:'name'},
  {headerName:'Email', field:'email'},
  {headerName:'Number', field:'number'},
];
  public showTable: boolean =false;
  public dataSource:  MatTableDataSource<any> | undefined;
  public name: string = "";
  constructor(notifier: NotifierService, private loginServiceService: LoginServiceService,
    private dialog: MatDialog) { 
    this.notifier = notifier; 
  }

  ngOnInit(): void {
  }

  public login(email: string, password: string){

    let message = "";
    let flag = false;
    if(email=="" || password==""){
      this.notifier.notify("error","Please fill the required details");
      return ;
    } 
    
    let studentVO = new StudentVO("", email, "", password);
    this.loginServiceService.login(studentVO).subscribe(data =>{
      this.loggedIn = true;
      this.name = JSON.stringify(data);
    }, error =>{
      this.notifier.notify("error","Email or Username is Wrong");
    });
  }

  public showStudents(){
    this.loginServiceService.getStudents().subscribe(data =>{
      if(data.length>0){
        this.studentVO = data;
      console.log(JSON.stringify(this.studentVO));
      this.showTable = true;
      // this.dataSource = new MatTableDataSource<any>(data);
      // this.displayedColumns =  Object.keys(data[0]);

      } else {
        this.notifier.notify("info","No data available");
      }
    },error =>{
      this.showTable = false;
      console.log("Error while fetching data");
    });
  }

}
