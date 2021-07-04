import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // or whatever filename
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

  nombre:string = 'Capitan America';

  arreglo = [ 1 , 2 , 3 , 4, 5 ,6 , 7, 8, 9, 10]

  PI: number = Math.PI;

  porcentaje:number = 0.234
}
