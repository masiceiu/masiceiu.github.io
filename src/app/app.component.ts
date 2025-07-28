import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'The Router Page';
}

@Component({
  selector: '404',
  template: '404.'
})
export class NoComponent  {
  name = '404:Page';
}
