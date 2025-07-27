import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'home-view',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private router: Router) {}
    onNavigate() {
        //this.router.navigate(['/server'])
        this.router.navigate(['/demo','one','server'])
    }
    onLoadServer(id:number) {
        //this.router.navigate(['/server',id,'edit'], {queryParams: {allowEdit: '1'}, fragment: 'selectedServer'})
        this.router.navigate(['/demo','one','server',id,'edit'], {queryParams: {allowEdit: '1'}, fragment: 'selectedServer'})
    }
}