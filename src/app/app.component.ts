import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search='';


  libros=[{
    autor:'hercules',
    anno:'2020'
  },{
    autor:'mitos y leyendas',
    anno:'1999'
  },{
    autor:'sherlock holmes',
    anno:'2007'
  }]
}
