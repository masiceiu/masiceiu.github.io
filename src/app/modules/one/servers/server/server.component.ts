import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
selector: 'servers-view',
templateUrl: './server.component.html',
styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit,OnDestroy {
  activatedServer!: string ;
  subscrbe!:Subscription;
  constructor(private router: Router, private route: ActivatedRoute){

  }
  ngOnInit() {
    this.activatedServer = this.route.snapshot.params['id'];
    this.subscrbe = this.route.params.subscribe((params: Params)=> this.activatedServer = params['id']);
  }
  ngOnDestroy() {
    this.subscrbe.unsubscribe();
  }
  onEdit() {
    this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling:'preserve'})
  }
}