import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-projmgrhome',
  templateUrl: './projmgrhome.component.html',
  styleUrls: ['./projmgrhome.component.css']
})
export class ProjmgrhomeComponent implements OnInit {

  constructor(private homerouter : Router) { 
    homerouter.navigate(['viewtask']);
  }

  ngOnInit() {
  }

}
