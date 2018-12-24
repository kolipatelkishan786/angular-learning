import {Component, OnInit} from '@angular/core';

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
  serverName = 'Test server';
  servercreated = false;
  servers = ['Testserver','Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreatetionServer() {
    this.servercreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'server was Created! ' + this.serverName;

  }
  onUpdateserverName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
