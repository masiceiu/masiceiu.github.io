import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
selector: 'servers-view',
templateUrl: './edit-server.component.html',
styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  selectedServer!: number;
  allowEdit: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute){
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.selectedServer = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params)=> this.selectedServer = params['id']);
    
    this.route.queryParams.subscribe((queryParams: Params)=> {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true: false;
      console.log('q', this.allowEdit);
    })
  }
}