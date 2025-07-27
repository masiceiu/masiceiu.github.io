import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
selector: 'servers-view',
templateUrl: './servers.component.html',
styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serversName: string[] = ['server.uk', 'server.es', 'server.nl', 'server.de'];
  clientsName: string[] = ['Verizon', 'Microsoft','Apple', 'Samsung'];

  constructor(private router: Router, private route: ActivatedRoute){

  }
  onReload(i: number) {
    this.router.navigate([`${this.serversName[i]}`],{relativeTo: this.route , queryParams: {allowEdit: i%2===0 ? '1': '0'}, fragment:'overseas'});
  }
}