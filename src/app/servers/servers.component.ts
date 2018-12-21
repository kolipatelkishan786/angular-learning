import { Component, OnInit } from '@angular/core';

@Component({
  /*selector: '[app-servers]',*/
 // selector: '.app-servers',
  selector: 'app-servers',
  /*template: `
    <app-server></app-server>
    <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Creation!';
  constructor() {
    setTimeout(() =>{
       this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }
  onCreatetionServer() {
    this.serverCreationStatus  = 'server was Created!';
  }

}
