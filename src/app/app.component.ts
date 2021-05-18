import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search='';


  folderObjs=[{
    name:'Folder1',
    size:'12mb'
  },{
    name:'Folder2',
    size:'10mb'
  },{
    name:'Folder3',
    size:'2mb'
  }]
}
