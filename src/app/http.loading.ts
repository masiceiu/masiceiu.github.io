import { EventEmitter, Injectable } from '@angular/core'
import { 
  HttpRequest
} from '@angular/common/http';
/*
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
*/

@Injectable()
export class HttpLoading {
  
  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  //loading: boolean = true;
  constructor() {
    //this.loading = false;
  }
  /**
   * Stores all currently active requests
   */
  private requests: HttpRequest<any>[] = [];
  
  /**
   * Adds request to the storage and notifies observers
   */
  onStarted(req: HttpRequest<any>): void {
    this.requests.push(req);
    this.notify();
  }

   
  /**
   * Removes request from the storage and notifies observers
   */
  onFinished(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }
  
  /**
   * Notifies observers about whether there are any requests on fly
   */
  private notify(): void {
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }
  
}
//https://stackblitz.com/edit/angular-http-interceptor-spinner