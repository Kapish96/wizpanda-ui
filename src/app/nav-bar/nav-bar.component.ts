import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title:String = '';

constructor(private router: Router){}

     ngOnInit() {
    
       }


  

    public home() {
      this.title='';
    this.router.navigate(['/home']);
    
   }

}
