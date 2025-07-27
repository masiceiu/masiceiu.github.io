import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, OnDestroy, isDevMode, enableProdMode } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  ActivatedRoute,
} from '@angular/router';

//import * as Bowser from "bowser";
import Bowser from "bowser";
import { fromEvent, Observable, Subscription } from 'rxjs';

//import { hi } from './shared';
//import { parseBowser } from './shared/index.js';
import { AppService } from './app.service';
import { HttpLoading } from './http.loading';
import { GlobalData } from './shared/models/global-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'masiceiu';
  baseUrl = '';
  payload: any = { current_url: "/", previous_url: "", app_nav_show: true };

  width = 250;
  height = 250;
  fixedHeight = 100;
  loading: boolean = true;

  subscriptions: Subscription[] = [];
  returnedData: any;
  constructor(
    private router: Router,
    private tracking: AppService,
    protected globalData: GlobalData,
    private cdRef: ChangeDetectorRef,
    private httpLoading: HttpLoading) {
      
    this.httpLoading.onLoadingChanged.subscribe(
      (isLoading) => (this.loading = isLoading)
    );
    this.baseUrl = this.tracking.config.apiBaseUrl;
    this.tracking.data.subscribe((payload: any) => {
      this.payload = Object.assign(this.payload, payload);
      switch (payload.switch_on) {
        case "user-agent-info":
          //console.log(this.payload.switch_on, this.payload);
          /*this.tracking.ipInfo().then((ip)=>{
            //console.log("ipInfo:", ip)
            Object.assign(this.payload, {ip:ip});
            let req = {
              json: this.payload,
              lang: "en",
              type_id: 1//"user-agent-info"
            }
            let url = `${this.baseUrl}api/qurn/json`;
            this.tracking.httpClient.post(url, req).subscribe((res: any) => {
              //console.log("api/qurn/json_post:", res);
              
            });
          }).catch((err)=>console.log(err)); */
          break;
        case "route-has-changed":
          //console.log(this.payload.switch_on, this.payload);
          break;
        default:
          //console.log('app-default:', this.payload,);
          break;
      }
    });
    /** Navigation Event************************/
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        //console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        //console.log(event);
        this.tracking.update(
          {
            current_url: event.url,
            previous_url: this.payload.current_url,
            switch_on: "route-has-changed"
          });
      }
      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        //console.log(event.error);
      }
    });

    /** geolocation Event************************/
    /*
    const locations = new Observable((observer) => {
      let watchId: number;
      // Simple geolocation API check provides values to publish
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
          observer.next(position);
        }, (error: GeolocationPositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }
      // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe() {
          //console.log('watchId',watchId)
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });
    // Call subscribe() to start listening for updates.
    const locationsSubscription = locations.subscribe({
      next(position) {
        console.log('Current Position: ', position);
        locationsSubscription.unsubscribe();
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });

    // Stop listening for location after 10 seconds
    setTimeout(() => {
      locationsSubscription.unsubscribe();
    }, 10000);*/
    /*
    //console.log("AppComponent:",tracking.config);
    if(isDevMode()) {
      enableProdMode();
    }*/
    //hi();
  }
  ngOnInit() {
    Promise.resolve().then(()=>this.loading = false);
    //console.log("sid:", this.tracking.config.sid);
    this.tracking.loadLoginInfo();
    this.tracking.sseStartSession();
    /** User Agent ************************/
    
    //let userAgent = parseBowser(window.navigator.userAgent);
    let userAgent = Bowser.parse(window.navigator.userAgent);
    const browsers: any = {
      Firefox: 'firefox',
      Opera: 'opera',
      Trident: 'ie',
      Edg: 'edge',
      Brave: 'brave',
      Chrome: 'chrome',
      Safari: 'safari'
    };
    let browserUrl = '';
    let browserName = browsers[userAgent.browser.name || ''];
    if (browserName) {
      browserUrl = `https://raw.githubusercontent.com/alrra/browser-logos/master/src/${browserName}/${browserName}_512x512.png`
    }
    Object.assign(userAgent.browser, { pair: browsers, url: (browserUrl || '') });
    this.tracking.update(Object.assign(userAgent, { switch_on: "user-agent-info" }));
    /*this.router.events.pipe(filter(
      (event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
      this.tracking.update(
        {
          current_url:event.url, 
          previous_url:this.payload.current_url
        });
    });*/
    /*
    let url = `${this.baseUrl}api/qurn/json?type_id=1`;
    this.tracking.httpClient.get(url).subscribe((res: any) => {
      //console.log("api/qurn/json_get:", res);
    });*/

    this.subscriptions.push(fromEvent(window, 'online').subscribe(e => {
      console.log('Online...');
      this.globalData.isOffline = false;
    }));

    this.subscriptions.push(fromEvent(window, 'offline').subscribe(e => {
      console.log('Offline...');
      this.globalData.isOffline = true;
    }));
  }
  ngAfterViewInit(): void {
    Promise.resolve().then(()=>this.loading = false);
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  getA() {
    //https://stackblitz.com/edit/angular-cache-and-offline-interceptor
    this.tracking.httpClient
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe(
        {
          next:(s:any)=> { this.returnedData = s}, 
          error:(e:any)=>{ this.returnedData = e },
          complete() {
            // Will not be called, even when cancelling subscription.
            console.log('completed!');
          }});
  }

  ngOnDestroy(): void {
    /**
    * Unsubscribe all subscriptions to avoid memory leak
    */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
/*
function parseBowser(userAgent: string) {
  this.parseBowser();
}*/
//https://stackblitz.com/edit/angular-bowser-1uh33i
//https://stackoverflow.com/questions/42110817/load-config-json-file-in-angular-2
//https://stackoverflow.com/questions/45931391/angular-4-http-service-404-json-file-not-found