import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-projmgrhome',
  templateUrl: './projmgrhome.component.html',
  styleUrls: ['./projmgrhome.component.css']
})
export class ProjmgrhomeComponent implements OnInit {

  constructor(private homerouter : Router) { 
    
  }

  ngOnInit() {
    //this.homerouter.navigate(['viewtask']);
  }

}
