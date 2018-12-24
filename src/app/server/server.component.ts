import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverid: number = 10;
  serverstatus: string = 'offline';

  constructor() {
    this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
  getserverstatus() {
    return this.serverstatus;
  }
  getcolor() {
    return this.serverstatus === 'online' ? 'green' : 'red';
  }
}
