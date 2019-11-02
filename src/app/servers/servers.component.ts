import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus='No server was created!';
  serverName='TestServer';
  serverCreated: boolean =false;
  servers=['TestServer1', 'TestServer2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was successfuly created! Server name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName= (<HTMLInputElement>event.target).value;
    //this.serverName=event.target.value;
  }
    
}
