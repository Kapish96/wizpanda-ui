import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridTile } from '../interfaces/GridTile';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router){

  }

   ngOnInit() { }

   tiles: GridTile[] = [
    { text: 'LOGIN', cols: 1, rows: 1, color: '#FFCDD2' },
    { text: 'CREATE ACCOUNT', cols: 1, rows: 1, color: '#C5CAE9' },
   ];

   onItemClick(item: GridTile): void {
     switch (item.text) {

       
       case 'LOGIN':
         this.router.navigate(['/login']);
         break;
       case 'CREATE ACCOUNT':
         this.router.navigate(['/createAccount']);
         break;
      
       default:
         break;

     }
   } 

}
