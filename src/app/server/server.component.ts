import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverid: number = 10;
  serverstatus: string = 'offline';
  constructor() { }

  ngOnInit() {
  }
  getserverstatus() {
    return this.serverstatus;
  }
}
